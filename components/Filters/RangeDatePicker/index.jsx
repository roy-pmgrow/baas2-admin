import dayjs from "dayjs";

const RangeDatePicker = ({ registers, setValue, title }) => {
  const handleOneWeek = () => setValue(registers[0].name, dayjs().subtract(1, "week").format("YYYY-MM-DD"));
  const handleOneMonth = () => setValue(registers[0].name, dayjs().subtract(1, "month").format("YYYY-MM-DD"));
  const hnadleThreeMonth = () =>
    setValue(registers[0].name, dayjs().subtract(3, "month").format("YYYY-MM-DD"));

  return (
    <div className="flex">
      <div className="flex items-center">
        <div className="min-w-[5rem] mr-[1rem]">{title}</div>
        <input
          {...registers[0]}
          z
          type="date"
          className="bg-[#f3f5fb] border bodrer-[#dbdbdb] rounded-[0.25rem] w-full leading-[2.5rem] p-[0_0.625rem] outline-none"
          defaultValue={dayjs().format("YYYY-MM-DD")}
          min={dayjs().subtract(1, "year").format("YYYY-MM-DD")}
          max={dayjs().add(1, "year").format("YYYY-MM-DD")}
        />
        ~
        <input
          {...registers[1]}
          type="date"
          className="bg-[#f3f5fb] border bodrer-[#dbdbdb] rounded-[0.25rem] w-full leading-[2.5rem] p-[0_0.625rem] outline-none"
          defaultValue={dayjs().format("YYYY-MM-DD")}
          min={dayjs().subtract(1, "year").format("YYYY-MM-DD")}
          max={dayjs().add(1, "year").format("YYYY-MM-DD")}
        />
      </div>
      <button
        className="inline-block bg-[#C6CDE2] ml-1.5 rounded-md font-medium w-[5rem]"
        onClick={handleOneWeek}
      >
        1주
      </button>
      <button
        className="inline-block bg-[#C6CDE2] ml-1.5 rounded-md font-medium w-[5rem]"
        onClick={handleOneMonth}
      >
        1개월
      </button>
      <button
        className="inline-block bg-[#C6CDE2] ml-1.5 rounded-md font-medium w-[5rem]"
        onClick={hnadleThreeMonth}
      >
        3개월
      </button>
    </div>
  );
};

export default RangeDatePicker;
