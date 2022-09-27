import adminApi from "apis/admin";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const login = async (data) => {
    adminApi
      .login(data)
      .then(({ resultCd }) => {
        if (resultCd === "success") push("web/mgr/sys/mngUser");
      })
      .catch(() => alert("아이디 또는 패스워드가 일치하지 않습니다."));
  };

  const onValid = (data) => {
    login(data);
  };

  const onInvalid = (errors) => {
    const message = errors.userId?.message || errors.userPw?.message;
    alert(message);
  };

  return (
    <form
      className="w-screen h-screen bg-[#3e4b5b] flex items-center justify-center"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <section className="w-[50rem] bg-white p-[10rem] rounded-lg">
        <div className="w-full text-center text-2xl font-semibold">
          <span className="text-blue-900">피엠그로우</span>
          <span className="text-gray-500 ">에 오신 것을 환영합니다</span>
        </div>
        <div className="w-full text-center mb-[2rem]">
          <span className="text-gray-500 text-lg">Register your account</span>
        </div>

        <div className="space-y-[1rem]">
          <input
            {...register("userId", { required: "아이디를 입력해주세요." })}
            type="text"
            className="bg-[#F5F5F5] w-full p-[1rem] rounded"
            placeholder="아이디를 입력하세요"
          />
          <input
            {...register("userPw", { required: "비밀번호를 입력해 주세요." })}
            type="password"
            className="bg-[#F5F5F5] w-full p-[1rem] rounded"
            placeholder="비밀번호를 입력하세요"
          />
          <button className="bg-[#262836] w-full p-[1rem] rounded text-white font-bold" type="submit">
            로그인
          </button>
        </div>
      </section>
    </form>
  );
};

export default LoginPage;
