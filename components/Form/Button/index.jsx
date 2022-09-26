
const Button = ({ children, color = "bg-[#3e4b5b]", onClick }) => {
  return (
    <button
      type="button"
      className={`px-[1.875rem] py-[0.625rem] text-white border-none cursor-pointer rounded-[3.125rem] ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
