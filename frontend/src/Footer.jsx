const Footer = () => {
  const year = new Date();
  return (
    <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row mt-1 rounded-t-lg p-4 items-center justify-center bg-gray-400">
      <h1 className="text-xl">Copyright &copy; {year.getFullYear()}</h1>
    </div>
  );
};

export default Footer;
