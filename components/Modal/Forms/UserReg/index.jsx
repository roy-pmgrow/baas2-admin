import systemApi from "apis/system";
import Dropdown from "components/Filters/Dropdown";
import Input from "components/Filters/Input";
import Button from "components/Forms/Button";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

const UseReg = ({ setModal, setDataSet }) => {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const setMngUserReg = async (data) => {
    await systemApi.mngUserReg(data);
    const { mngUserList } = await systemApi.mngUserList();
    setDataSet(mngUserList);
    alert("등록이 완료되었습니다.");
  };

  const onValid = (data) => {
    setMngUserReg(data);
    setModal(false);
  };

  const onInvalid = (errors) => {
    const message =
      errors.userNm?.message || errors.userId?.message || errors.userPw?.message || errors.userGrpId?.message;
    alert(message);
  };

  return (
    <form className="p-5 min-w-[28rem]" onSubmit={handleSubmit(onValid, onInvalid)}>
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-lg font-semibold">사용자 등록</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setModal(false)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="space-y-[0.5rem]">
        <Input register={register("userNm", { required: "사용자명을 입력해주세요." })} title="사용자명*" />
        <Input register={register("userId", { required: "사용자 ID를 입력해주세요." })} title="사용자 ID*" />
        <Input register={register("userPw", { required: "비밀번호를 입력해주세요." })} title="비밀번호*" />
        <Dropdown
          register={register("userGrpId", {
            validate: {
              checkEmpty: (value) => value !== "" || "사용자그룹을 선택해주세요.",
            },
          })}
          title="사용자그룹*"
          list={[
            { id: "", title: "선택" },
            { id: "1", title: "관리자" },
            { id: "2", title: "사용자" },
          ]}
        />
        <Input register={register("config")} title="CONFIG" />
        <Input register={register("regId")} title="admin" value="admin" hidden />
        <Input register={register("companyId")} value="44" hidden />
        <Input register={register("regDate")} value={dayjs().format("YYYY-MM-DD HH:mm:ss")} hidden />
        <Input register={register("updateDate")} value={dayjs().format("YYYY-MM-DD HH:mm:ss")} hidden />
      </div>
      <Button type="submit" className="mt-[2rem]">
        저장
      </Button>
    </form>
  );
};

export default UseReg;
