/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from "axios";
import {
	Message
} from "element-ui";
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
		const {
			response
		} = error;
		if (response) {
			if (response) {
				switch (response.status) {
					// 400: 客户端请求的语法错误，服务器无法理解
					case 400:
						console.log("400客户端请求的语法错误，服务器无法理解");
						break;
					case 401:
						Message({
							message: "登录过期,即将跳转登录",
							type: "error"
						});
						break;
						// 404请求不存在
					case 404:
						Message({
							message: "请求的资源不存在",
							type: "error"
						});
						break;
					case 408:
						Message({
							message: "网络延时，请稍后",
							type: "error"
						});
						break;
					default:
						Message("网络异常");
				}
				return Promise.reject(response);
			} else {
				// 处理断网的情况
				// eg:请求超时或断网时，更新state的network状态
				// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
				// 关于断网组件中的刷新重新获取数据，会在断网组件中说明
			}
		}
	}
);
export default instance;