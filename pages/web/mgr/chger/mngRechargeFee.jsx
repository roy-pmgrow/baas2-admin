import chargeApi from "apis/charge";
import DatePicker from "components/Filter/DatePicker";
import Dropdown from "components/Filter/Dropdown";
import Button from "components/Form/Button";
import Table from "components/Form/Table";
import dayjs from "dayjs";
import Layout from "layouts/Layout";
import Wrapper from "layouts/Wrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MngRechargeFeePage = () => {
  const initParams = {
    aplcYmd: dayjs().format("YYYY-MM-DD"),
    hlVoltageDivCd: "",
    choiceDivCd: "",
    timeslotDivCd: "",
  };
  const [dataSet, setDataSet] = useState([]);
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onValid = (data) => {
    getMngRechargeFeeList(data);
  };

  const getMngRechargeFeeList = async (data) => {
    const { mngRechargeFeeList } = await chargeApi.mngRechargeFeeList(data);
    setDataSet(mngRechargeFeeList);
  };

  useEffect(() => {
    getMngRechargeFeeList(initParams);
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onValid)}>
        <Wrapper title="충전단가 관리">
          <Dropdown
            register={register("hlVoltageDivCd")}
            title="고저전압구분"
            list={[
              { id: "", title: "전체" },
              { id: "1", title: "고압" },
              { id: "2", title: "저압" },
            ]}
          />
          <Dropdown
            register={register("choiceDivCd")}
            title="전압선택구분"
            list={[
              { id: "", title: "전체" },
              { id: "1", title: "선택1" },
              { id: "2", title: "선택2" },
              { id: "3", title: "선택3" },
              { id: "4", title: "선택4" },
              { id: "5", title: "자가소비용" },
            ]}
          />
          <Dropdown
            register={register("timeslotDivCd")}
            title="시간대구분"
            list={[
              { id: "", title: "전체" },
              { id: "1", title: "경부하" },
              { id: "2", title: "중간부하" },
              { id: "3", title: "최대부하" },
              { id: "4", title: "전체시간" },
            ]}
          />
          <DatePicker register={register("aplcYmd")} title="조회일자" />
          <Button type="submit">조회</Button>
        </Wrapper>
        <Wrapper title="분기별 세부항목   [적용일자 : 2022-04-01]">
          <Table
            header={["NO", "전압구분", "선택구분", "기본요금", "시간대", "여름철", "봄가을철", "겨울철"]}
          >
            {dataSet.map(
              (
                {
                  hiVoltageDivNm,
                  choiceDivNm,
                  basicFee,
                  timeslotDivNm,
                  energyCharge1,
                  energyCharge2,
                  energyCharge3,
                },
                index,
              ) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{hiVoltageDivNm}</td>
                  <td>{choiceDivNm}</td>
                  <td>{Number(basicFee).toLocaleString()}</td>
                  <td>{timeslotDivNm}</td>
                  <td>{energyCharge1}</td>
                  <td>{energyCharge2}</td>
                  <td>{energyCharge3}</td>
                </tr>
              ),
            )}
          </Table>
        </Wrapper>
      </form>
    </Layout>
  );
};

export default MngRechargeFeePage;
