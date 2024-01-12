const Heading = ({ className, children }) => {
  return (
    <>
      <h1
        className={`${className} text-center my-10 text-4xl sm:text-6xl font-bold hover:text-green-400`}
      >
        {children}
      </h1>
      <hr className="border-2 border-green-700  w-48 mx-auto mb-10" />
    </>
  );
};

export default Heading;
