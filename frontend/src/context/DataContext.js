import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/posts";
import { format } from "date-fns";
import { useBattery } from "react-use";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [getPosts, setPosts] = useState([]);
  const [getSearch, setSearch] = useState("");
  const [getSearchResults, setSearchResults] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getTitle, setTitle] = useState("");
  const [getBody, setBody] = useState("");
  const [getIsPost, setIsPost] = useState(true);
  const [getEditTitle, setEditTitle] = useState("");
  const [getEditBody, setEditBody] = useState("");
  const navigate = useNavigate();
  const getBatteryState = useBattery();
  const [getError, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setError(null);
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          setError(error.message);
          console.log(`Error : ${error.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const searchItem = getPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(getSearch.toLowerCase()) ||
        post.body.toLowerCase().includes(getSearch.toLowerCase())
    );
    setSearchResults(searchItem.reverse());
  }, [getSearch, getPosts]);

  const handleAddPost = async (e) => {
    try {
      e.preventDefault();
      setIsPost(true);
      if (getTitle.trim().length && getBody.trim().length) {
        const newDatetime = format(new Date(), "MMMM dd ,yyyy p");

        const newPost = {
          title: getTitle,
          datetime: newDatetime,
          body: getBody,
        };

        const response = await api.post("/posts", newPost);

        const changePosts = [...getPosts, response.data];
        setPosts(changePosts);
      }
      setTitle("");
      setBody("");
      navigate("/");
    } catch (error) {
      if (error.response) {
        // Not in the 200 response range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`Error : ${error.message}`);
      }
    }
  };

  const handleEdit = async (e, id) => {
    e.preventDefault();
    const newDatetime = format(new Date(), "MMMM dd ,yyyy p");
    const updatePost = {
      title: getEditTitle,
      datetime: newDatetime,
      body: getEditBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatePost);
      setPosts(
        getPosts.map((post) => (post._id === id ? { ...response.data } : post))
      );
      setEditBody("");
      setEditTitle("");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (e, id) => {
    try {
      e.preventDefault();
      const updatedPosts = getPosts.filter((post) => post._id !== id);
      setPosts(updatedPosts);

      await api.delete(`/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        getIsLoading,
        getIsPost,
        getSearchResults,
        getTitle,
        getBody,
        getPosts,
        getEditTitle,
        getEditBody,
        getBatteryState,
        getError,
        setSearch,
        setTitle,
        setBody,
        setEditTitle,
        setEditBody,
        handleAddPost,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
