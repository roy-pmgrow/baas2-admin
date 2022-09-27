const SearchInput = ({ register, title, ...rest }) => {
  return (
    <div className={`flex items-center ${rest.hidden && "hidden"}`}>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <div className="min-w-[5rem] mr-[1rem]">{title}</div>
          <input
            {...register}
            {...rest}
            className="bg-[#f3f5fb] border bodrer-[#dbdbdb] rounded-[0.25rem] w-full leading-[2.5rem] p-[0_0.625rem] outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
