import carApi from "apis/car";
import FilterDropdown from "components/Filter/FilterDropdown";
import FilterRangeDatePicker from "components/Filter/FilterRangeDatePicker";
import Button from "components/Form/Button";
import Table from "components/Form/Table";
import Wrapper from "layout/Wrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MngCarDriveHistListForm = () => {
  const initData = { aplcYmd: "2022-09-26", hlVoltageDivCd: "", choiceDivCd: "", timeslotDivCd: "" };
  const [dataSet, setDataSet] = useState([]);
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onValid = (data) => {
    console.log(data);
  };

  // const getMngRechargeFeeList = async (data) => {
  //   const { mngRechargeFeeList } = await chargeApi.mngRechargeFeeList(data);
  //   setDataSet(mngRechargeFeeList);
  // };

  const getMngCarDriveHistCodeList = async () => {
    const { codeList4, codeList5 } = await carApi.mngCarDriveHistCodeList();
    console.log(codeList4, codeList5);
  };

  useEffect(() => {
    // getMngCarDriveHistCodeList();
  }, []);

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Wrapper title="차량운행이력">
        <FilterDropdown
          register={register("hlVoltageDivCd")}
          title="업체명"
          list={[
            { id: "", title: "전체" },
            { id: "1", title: "고압" },
            { id: "2", title: "저압" },
          ]}
        />
        <FilterDropdown
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
        <FilterDropdown
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
        <FilterRangeDatePicker registers={[register("dataS"), register("dataE")]} title="조회일자" />
        <Button type="submit">조회</Button>
      </Wrapper>
      <Wrapper title="운행이력">
        <Table header={["NO", "전압구분", "선택구분", "기본요금", "시간대", "여름철", "봄가을철", "겨울철"]}>
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
                <td>{basicFee}</td>
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
  );
};

export default MngCarDriveHistListForm;
