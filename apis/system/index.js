import { httpRequest } from "apis/httpRequest";

const systemApi = {
  mngUserList(data) {
    return httpRequest.post("/web/mgr/sys/rest/mngUserList.do", data);
  },
};

export default systemApi;
