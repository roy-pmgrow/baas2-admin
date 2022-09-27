import carApi from "apis/car";
import Dropdown from "components/Filters/Dropdown";
import RangeDatePicker from "components/Filters/RangeDatePicker";
import Button from "components/Forms/Button";
import Table from "components/Forms/Table";
import Layout from "layouts/Layout";
import Wrapper from "layouts/Wrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MngCarDriveHistListForm = () => {
  const [dataSet, setDataSet] = useState([]);
  const { register, watch, setValue, handleSubmit } = useForm({ mode: "onChange" });

  const [companies, setCompanies] = useState([]);
  const [carNos, setCarNos] = useState([]);

  const onValid = (data) => {
    getMngCarDriveHistList(data);
  };

  const getMngCarDriveHistList = async (data) => {
    const { list } = await carApi.mngCarDriveHistList(data);
    setDataSet(list);
  };

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
    getMngCarDriveHistList();
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onValid)}>
        <Wrapper title="차량운행이력">
          <div className="space-y-[1rem]">
            <div className="inline-flex space-x-[2rem]">
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
            </div>
            <div className="flex space-x-[2rem]">
              <RangeDatePicker
                registers={[register("dateS"), register("dateE")]}
                setValue={setValue}
                title="조회일자"
              />
              <Button type="submit">조회</Button>
            </div>
          </div>
        </Wrapper>
        <Wrapper title="운행이력">
          <Table
            header={[
              "NO",
              "운행일시",
              "업체명",
              "차량번호",
              "주행거리",
              "누적충전량",
              "누적방전량",
              "위치정보",
            ]}
          >
            {dataSet.map(
              (
                { drive_time, name, vehiclenumber, trip, accum_chg_amount, accum_dischg_amount, lat, lng },
                index,
              ) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{drive_time}</td>
                  <td>{name}</td>
                  <td>{vehiclenumber}</td>
                  <td>{parseFloat((trip / 1000).toFixed(1))}km</td>
                  <td>{accum_chg_amount}</td>
                  <td>{accum_dischg_amount}</td>
                  <td>
                    {lat}, {lng}
                  </td>
                </tr>
              ),
            )}
          </Table>
        </Wrapper>
      </form>
    </Layout>
  );
};

export default MngCarDriveHistListForm;
