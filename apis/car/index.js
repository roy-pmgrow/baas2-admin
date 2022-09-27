import { httpRequest } from "apis/httpRequest";
import dayjs from "dayjs";

const carApi = {
  mngCarDriveHistList(data) {
    console.log(data);
    if (data === undefined) {
      data = {
        companyId: "",
        carDivCd: "",
        carNo: "",
        dateS: dayjs().format("YYYY-MM-DD"),
        dateE: dayjs().format("YYYY-MM-DD"),
      };
    }
    return httpRequest.post("/web/mgr/MngCarBalance/mngCarDriveHistList.do", data);
  },
  mngCarDriveHistCodeList() {
    return httpRequest.post("/web/mgr/MngCarBalance/mngCarDriveHistCodeList.do", {});
  },
  mngCarList(companyId) {
    return httpRequest.post("/web/mgr/MngCarBalance/mngCarList.do", { companyId });
  },
};

export default carApi;
