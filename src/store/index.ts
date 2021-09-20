import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import appLocalStorage from "./modules/appLocalStorage";
import menuItems from "./modules/menuItems";

export default new Vuex.Store({
	modules: {
		appLocalStorage,
		menuItems
	}
});
