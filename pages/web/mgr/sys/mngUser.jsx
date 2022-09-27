import systemApi from "apis/system";
import InputSearch from "components/Filters/InputSearch";
import Button from "components/Forms/Button";
import Table from "components/Forms/Table";
import Layout from "layouts/Layout";
import Wrapper from "layouts/Wrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MngUserPage = () => {
  const [dataSet, setDataSet] = useState([]);
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onValid = (data) => {
    console.log(data);
    getMngUserList(data);
  };

  const getMngUserList = async (data) => {
    const { mngUserList } = await systemApi.mngUserList(data);
    setDataSet(mngUserList);
  };

  const handleUserReg = () => {
    // systemApi.mngUserReg();
  };

  useEffect(() => {
    getMngUserList({ userNm: "" });
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onValid)}>
        <Wrapper title="사용자 관리">
          <InputSearch register={register("userNm")} title="사용자명" />
          <Button type="submit">조회</Button>
        </Wrapper>
        <div className="flex justify-end mr-5 relative top-8">
          <Button color="bg-[#7154E1]" onClick={handleUserReg}>
            등록
          </Button>
        </div>
        <Wrapper title="사용자 목록">
          <Table
            header={[
              "NO",
              "사용자명",
              "사용자ID",
              "사용자그룹명",
              "업체명",
              "등록일시",
              "수정일시",
              "수정자",
            ]}
          >
            {dataSet.map(
              ({ userNo, userNm, userId, userGrpNm, companyNm, regDate, updateDate, updateId }, index) => (
                <tr key={userNo}>
                  <td>{index + 1}</td>
                  <td>{userNm}</td>
                  <td>{userId}</td>
                  <td>{userGrpNm}</td>
                  <td>{companyNm}</td>
                  <td>{regDate}</td>
                  <td>{updateDate}</td>
                  <td>{updateId}</td>
                </tr>
              ),
            )}
          </Table>
        </Wrapper>
      </form>
    </Layout>
  );
};

export default MngUserPage;

// {
//   "userNm": "test",
//   "userId": "test",
//   "userPw": "test",
//   "userGrpId": "2",
//   "companyId": "44",
//   "config": "",
//   "regId": "admin",
//   "regDate": "2022-09-27 14:48:16",
//   "updateDate": "2022-09-27 14:48:16"
// }
