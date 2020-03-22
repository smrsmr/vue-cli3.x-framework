import axios from "../../assets/request/http"; // 导入http中创建的axios实例

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
// 本地对接接口
// let url = process.env.VUE_APP_BASEURL;
// let url = "http://192.168.100.36:21002/invoker/";

const apiModule = {
  // 登录
  login(params) {
    return axios.post("login", params);
  }
};

export default {
  apiModule
};
