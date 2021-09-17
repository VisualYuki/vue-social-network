import {logInStorage} from "../../vue/utils/logInStorage";

const state = {
	isUserAuth: logInStorage.isUserAuth()
};

// TODO Добавить типы для vuex модулей.
const actions = {
	setUserAuth({commit}: any) {
		commit("setUserAuth");
		logInStorage.setUserAuth();
	},
	removeUserAuth({commit}: any) {
		commit("removeUserAuth");
		logInStorage.removeUserAuth();
	}
};

const mutations = {
	setUserAuth(state: any) {
		state.isUserAuth = true;
	},
	removeUserAuth(state: any) {
		state.isUserAuth = false;
	}
};

const getters = {};

export default {namespaced: true, state, actions, mutations, getters};
