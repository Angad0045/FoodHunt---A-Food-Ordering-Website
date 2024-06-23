const Shimmer = () => {
  // return <h1 className="center-center">Loading.............</h1>;
  return (
    <div className="flex flex-wrap dark:bg-neutral-800">
      {Array(20)
        .fill("")
        .map((e) => (
          <div className="w-52 h-72 m-5 p-2 bg-blue-50 dark:bg-neutral-700"></div>
        ))}
    </div>
  );
};

export default Shimmer;
