const Wrapper = ({ title, children }) => {
  return (
    <atricle>
      <h1 className="text-xl font-semibold ml-[1.25rem]">{title}</h1>
      <section className="mx-[1.25rem] mt-[1rem] mb-[2rem] bg-white p-[1rem_2rem_calc(2rem-15px)] border border-[#dbdbdb] rounded-[0.8rem] flex items-center space-x-[2rem]">
        {children}
      </section>
    </atricle>
  );
};

export default Wrapper;
