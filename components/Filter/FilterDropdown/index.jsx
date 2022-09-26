import React from "react";

const FilterDropdown = ({ title, list }) => {
  return (
    <div className="flex items-center">
      <div className="w-[5rem] mr-[1rem]">{title}</div>
      <select className="bg-[#f3f5fb] h-[2.6rem] border bodrer-[#dbdbdb] rounded-[0.25rem] w-full leading-[2.5rem] p-[0_0.625rem] outline-none">
        {list.map(({ id, title }) => (
          <option key={title} value={id}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
