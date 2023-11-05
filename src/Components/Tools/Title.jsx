const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl my-10 text-primary font-semibold bg-base-200 rounded uppercase border-l-4 px-4">{children}</h1>
    </div>
  );
};

export default Title;
