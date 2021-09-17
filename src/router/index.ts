import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";

import Auth from "../vue/pages/Auth.vue";
import Registration from "../vue/pages/Registration.vue";
//import Profile from "../vue/pages/Profile.vue";
import Profile from "@/vue/pages/Profile.vue";

import {logInStorage} from "../vue/utils/logInStorage";

Vue.use(VueRouter);

function isNotUserAuth(to: any, from: any, next: any) {
	if (!logInStorage.isUserAuth()) {
		next({name: "auth"});
	} else {
		next();
	}
}

function isUserAuth(to: any, from: any, next: any) {
	if (logInStorage.isUserAuth()) {
		next({name: "profile"});
	} else {
		next();
	}
}

// TODO как учитывать вложенность?
function isInvalidUrl(to: any, from: any, next: any) {
	if (logInStorage.isUserAuth()) {
		next({name: "profile"});
	} else {
		next({name: "auth"});
	}
}

const routes: Array<RouteConfig> = [
	{
		path: "/auth",
		name: "auth",
		component: Auth,
		beforeEnter: isUserAuth
	},
	{
		path: "/registration",
		name: "registration",
		component: Registration,
		beforeEnter: isUserAuth
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
		beforeEnter: isNotUserAuth
	},
	{
		path: "*",
		beforeEnter: isInvalidUrl
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
