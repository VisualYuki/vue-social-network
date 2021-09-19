import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: "en",
	messages: {
		en: {
			appName: "Social network",
			logIn: "Log in",
			login: "Login",
			password: "Password",
			notYetAccount: "Not yet account? Then",
			registration: "Registration",
			logInBtn: "log in"
		},
		ru: {
			appName: "Социальная сеть",
			logIn: "Войти",
			login: "Логин",
			password: "Пароль",
			notYetAccount: "Если нет аккаунта, тогда",
			registration: "Регистрация",
			logInBtn: "Войти"
		}
	}
});

export default i18n;
