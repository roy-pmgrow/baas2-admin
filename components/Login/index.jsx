import React from "react";

const Login = () => {
  return (
    <form className="w-screen h-screen bg-[#3e4b5b] flex items-center justify-center">
      <section className="w-[50rem] bg-white p-[10rem]">
        <div className="w-full text-center text-2xl font-semibold">
          <span className="text-blue-900">피엠그로우</span>
          <span className="text-gray-500 ">에 오신 것을 환영합니다</span>
        </div>
        <div className="w-full text-center mb-[2rem]">
          <span className="text-gray-500 text-lg">Register your account</span>
        </div>

        <div className="bg-[#F5F5F5] w-full p-[1rem]">
          <input />
        </div>
      </section>
    </form>
  );
};

export default Login;
