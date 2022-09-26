import { httpRequest } from "apis/httpRequest";

const chargeApi = {
  mngRechargeFeeList(data) {
    return httpRequest.post("/web/mgr/chger/rest/mngRechargeFeeList.do", data);
  },
};

export default chargeApi;
