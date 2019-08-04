/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from "axios";

if (process.env.NODE_ENV == "development") {
  //开发环境下的代理地址，解决本地跨域跨域，配置在vue.config.js中
  //项目域名地址
  axios.defaults.baseURL = "/api/";
} else if (process.env.NODE_ENV == "production") {
  //生产环境下的地址
  axios.defaults.baseURL = "http://127.0.0.1:8080";
}

// 创建axios实例
let instance = axios.create({
  timeout: 1000 * 10 // 超时
});
// 设置post请求头
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 设置get请求头
instance.defaults.headers.get["Content-Type"] = "application/json";
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.error(error)
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  //res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  res => {
    if (res.status === 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    }
  }
);

export default instance;
