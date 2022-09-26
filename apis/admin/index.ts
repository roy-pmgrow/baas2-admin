import { httpRequest } from "./../httpRequest";
const adminApi = {
  login(userId, userPw) {
    return httpRequest.post("/web/home/rest/loginProc", {
      userId,
      userPw,
    });
  },
};

export default adminApi;
