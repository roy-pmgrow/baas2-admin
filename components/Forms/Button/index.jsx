const Button = ({ type = "button", className = "", children, color = "bg-[#3e4b5b]", onClick }) => {
  return (
    <button
      type={type}
      className={`px-[1.875rem] py-[0.5rem] min-w-[8.125rem] text-white border-none cursor-pointer rounded-[3.125rem] ${className} ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
