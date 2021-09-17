import {Component} from "vue";

declare const AuthForm: Component<
	any,
	{
		call: () => void;
		close: () => void;
	},
	any,
	{
		title?: string;
		maxWidth?: string | number;
		maxHeight?: string | number;
		persistent?: boolean;
		scrollable?: boolean;
		loading?: boolean;
		fullscreen?: boolean;
		submitAllow?: boolean;
		submitPending?: boolean;
		cancelText?: string;
		submitText?: string;
	}
>;
