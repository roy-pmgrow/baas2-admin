import { httpRequest } from "apis/httpRequest";

const adminApi = {
  login({ userId, userPw }) {
    var formdata = new FormData();
    formdata.append("userId", userId);
    formdata.append("userPw", userPw);

    return httpRequest.form("/web/home/rest/loginProc", formdata);
  },
  getMenuList(userId) {
    return httpRequest.post("/web/mgr/sys/rest/getMenuList", { userId });
  },
};

export default adminApi;
