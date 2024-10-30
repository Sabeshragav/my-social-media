import { useContext } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import { Route, Routes } from "react-router-dom";
import Missing from "./Missing";
import About from "./About";
import Footer from "./Footer";
import PostPage from "./PostPage";
import Edit from "./Edit";
import DataContext from "./context/DataContext";

function App() {
  const { getIsLoading, getIsPost, getError } = useContext(DataContext);

  return (
    <div className="mx-1">
      <Header title={"My Social Media"} />
      <Nav />
      {getError == null ? (
        <div className="bg-slate-700 rounded-lg mt-1">
          {getIsLoading && (
            <div className="p-3 flex h-[31rem] justify-center items-center">
              <h1 className="text-white text-3xl">
                Please wait while we load your data...
              </h1>
            </div>
          )}
          {!getIsLoading && (
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/post">
                <Route index element={getIsPost && <NewPost />} />
                <Route path=":id" element={<PostPage />} />
                <Route path="edit/:id" element={<Edit />} />
              </Route>

              <Route path="/about" element={<About />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          )}
        </div>
      ) : (
        <div className="bg-slate-700 rounded-lg mt-1">
          <div className="p-3 flex h-[31rem] justify-center items-center">
            <h1 className="text-red-700 text-5xl">
              Failed to fetch data from server...
            </h1>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
