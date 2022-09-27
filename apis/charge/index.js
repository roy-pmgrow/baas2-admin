import { httpRequest } from "apis/httpRequest";
import dayjs from "dayjs";

const chargeApi = {
  mngRechargeFeeList(data) {
    console.log(data);
    if (data === undefined) {
      data = {
        aplcYmd: dayjs().format("YYYY-MM-DD"),
        hlVoltageDivCd: "",
        choiceDivCd: "",
        timeslotDivCd: "",
      };
    }
    return httpRequest.post("/web/mgr/chger/rest/mngRechargeFeeList.do", data);
  },
};

export default chargeApi;
