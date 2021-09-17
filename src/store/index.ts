import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import appLocalStorage from "./modules/appLocalStorage";

export default new Vuex.Store({
	modules: {
		appLocalStorage
	}
});
