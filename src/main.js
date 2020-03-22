import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import animate from "animate.css";
import Axios from "./assets/request/http";
Vue.use(animate);
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");