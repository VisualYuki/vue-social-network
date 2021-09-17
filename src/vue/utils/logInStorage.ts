export let logInStorage: logInStorageType = {
	setLogInData(login: string, password: string): void {
		localStorage.setItem(login, password);
	},
	getLogInData(login: string): string | null {
		return localStorage.getItem(login);
	},
	isThereEnteredLogin(login: string): boolean {
		if (localStorage.getItem(login) === null) {
			return false;
		} else {
			return true;
		}
	},
	isUserAuth(): boolean {
		return localStorage.getItem("isUserAuth") === "true" ? true : false;
	},
	setUserAuth(): void {
		localStorage.setItem("isUserAuth", "true");
	},
	removeUserAuth(): void {
		localStorage.setItem("isUserAuth", "false");
	}
};

type logInStorageType = {
	setLogInData(login: string, password: string): void;
	getLogInData(login: string): string | null;
	isThereEnteredLogin(login: string): boolean;
	isUserAuth(): boolean;
	setUserAuth(): void;
	removeUserAuth(): void;
};
