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
			logInBtn: "log in",
			myProfile: "My profile",
			messenger: "Messenger",
			friends: "Friends",
			music: "Music",
			photos: "Photos"
		},
		ru: {
			appName: "Социальная сеть",
			logIn: "Войти",
			login: "Логин",
			password: "Пароль",
			notYetAccount: "Если нет аккаунта, тогда",
			registration: "Регистрация",
			logInBtn: "Войти",
			myProfile: "Мой профиль",
			messenger: "Сообщения",
			friends: "Друзья",
			music: "Музыка",
			photos: "Фотографии"
		}
	}
});

export default i18n;
