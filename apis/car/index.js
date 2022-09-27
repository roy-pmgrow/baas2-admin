import { httpRequest } from "apis/httpRequest";

const carApi = {
  mngCarDriveHistList(data) {
    return httpRequest.post("/web/mgr/MngCarBalance/mngCarDriveHistList.do", data);
  },
  mngCarDriveHistCodeList() {
    return httpRequest.post("/web/mgr/MngCarBalance/mngCarDriveHistCodeList.do");
  },
};

export default carApi;
