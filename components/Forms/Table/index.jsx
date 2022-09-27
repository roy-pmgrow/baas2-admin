const Table = ({ header, children }) => {
  return (
    <div className="w-full max-h-[38rem] overflow-y-auto">
      <table className="w-full" border="0" cellSpacing="0" cellPadding="0">
        <thead className="sticky top-0 bg-white">
          <tr>
            {header.map((title) => (
              <th
                key={title}
                className="p-[0.8rem] text-[#3e4b5b] bg-[#C6CDE2] first:rounded-[2rem_0px_0px_2rem] last:rounded-[0px_2rem_2rem_0px] font-normal"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#3e4b5b]">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
