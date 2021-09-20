import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
	i18n
}).$mount("#app");

// clear console after hot update
if (module.hot) {
	module.hot.accept(); // already had this init code

	module.hot.addStatusHandler((status) => {
		if (status === "prepare") console.clear();
	});
}
