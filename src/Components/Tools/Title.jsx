const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl  my-10 text-primary font-bold bg-base-200 dark:bg-gray-200 dark:text-gray-700 rounded uppercase border-l-4 border-gray-800 px-4 py-2">{children}</h1>
    </div>
  );
};

export default Title;
