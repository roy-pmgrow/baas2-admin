import carApi from "apis/car";
import DatePickerRange from "components/Filter/DatePickerRange";
import Dropdown from "components/Filter/Dropdown";
import Button from "components/Form/Button";
import Table from "components/Form/Table";
import Wrapper from "layouts/Wrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MngCarDriveHistListForm = () => {
  const initData = { aplcYmd: "2022-09-26", hlVoltageDivCd: "", choiceDivCd: "", timeslotDivCd: "" };
  const [dataSet, setDataSet] = useState([]);
  const { register, watch, handleSubmit } = useForm({ mode: "onChange" });

  const [companies, setCompanies] = useState([]);
  const [carNos, setCarNos] = useState([]);

  const onValid = (data) => {
    console.log(data);
  };

  // const getMngRechargeFeeList = async (data) => {
  //   const { mngRechargeFeeList } = await chargeApi.mngRechargeFeeList(data);
  //   setDataSet(mngRechargeFeeList);
  // };
  const deduplicateCompanies = (list) => {
    const deduplicateCompanies = new Set(list.map(({ name }) => name));
    const filterCompanies = [...deduplicateCompanies].map((name) => {
      const index = list.findIndex((code) => code.name === name);
      if (index !== -1) {
        const { companyId, name } = list[index];
        return {
          id: companyId,
          title: name,
        };
      }
    });
    setCompanies([{ id: "", title: "전체" }, ...filterCompanies]);
  };

  const deduplicateCarNos = (list) => {
    const deduplicateCarNos = new Set(list.map(({ carNo }) => carNo));
    const filterCarNos = [...deduplicateCarNos].map((name) => {
      return {
        id: name,
        title: name,
      };
    });
    setCarNos([{ id: "", title: "전체" }, ...filterCarNos]);
  };

  const getMngCarDriveHistCodeList = async () => {
    const { codeList4, codeList5 } = await carApi.mngCarDriveHistCodeList();
    deduplicateCompanies(codeList4);
    deduplicateCarNos(codeList5);
  };

  const getMngCarList = async (companyId) => {
    const { list } = await carApi.mngCarList(companyId);
    deduplicateCarNos(list);
  };
  useEffect(() => {
    if (companies.length !== 0) {
      const companyId = watch("companyId");
      companyId === "" ? getMngCarDriveHistCodeList() : getMngCarList(companyId);
    }
  }, [watch("companyId")]);

  useEffect(() => {
    getMngCarDriveHistCodeList();
  }, []);

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Wrapper title="차량운행이력">
        <Dropdown register={register("companyId")} title="업체명" list={companies} />
        <Dropdown
          register={register("carDivCd")}
          title="차량구분"
          list={[
            { id: "", title: "전체" },
            { id: "1", title: "버스" },
            { id: "2", title: "택시" },
            { id: "3", title: "화물" },
            { id: "4", title: "승용" },
            { id: "5", title: "기타" },
          ]}
        />
        <Dropdown register={register("carNo")} title="차량번호" list={carNos} />
        <DatePickerRange registers={[register("dataS"), register("dataE")]} title="조회일자" />
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
