import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount("#app");

// clear console after reloading browser
//if (module.hot) {
//	module.hot.accept(); // already had this init code

//	module.hot.addStatusHandler((status) => {
//		if (status === "prepare") console.clear();
//	});
//}

//let result = myLib.makeGreeting("hello, world");
//console.log("The computed greeting is:" + result);
//let count = myLib.numberOfGreetings;

//declare namespace myLib {
//	function makeGreeting(s: string): string;
//	let numberOfGreetings: number;
// }
