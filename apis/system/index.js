import { httpRequest } from "apis/httpRequest";

const systemApi = {
  mngUserList(data) {
    if (data === undefined) {
      data = { userNm: "" };
    }
    console.log(data);
    return httpRequest.post("/web/mgr/sys/rest/mngUserList.do", data);
  },
  mngUserReg(data) {
    return httpRequest.post("/web/mgr/sys/rest/mngUserReg.do", data);
  },
};

export default systemApi;
