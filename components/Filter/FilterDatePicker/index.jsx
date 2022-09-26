import dayjs from "dayjs";
import React from "react";

const FilterDatePicker = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="w-[7rem] mr-[1rem]">{title}</div>
      <input
        type="date"
        className="bg-[#f3f5fb] border bodrer-[#dbdbdb] rounded-[0.25rem] w-full leading-[2.5rem] p-[0_0.625rem] outline-none"
        defaultValue={dayjs().format("YYYY-MM-DD")}
        min={dayjs().subtract(1, "year").format("YYYY-MM-DD")}
        max={dayjs().add(1, "year").format("YYYY-MM-DD")}
      />
    </div>
  );
};

export default FilterDatePicker;