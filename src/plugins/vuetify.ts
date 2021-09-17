import Vuetify from "vuetify/lib";
import Vue from "vue";
import colors from "vuetify/lib/util/colors";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: "md"
	},
	theme: {
		//dark: true,
		//disable: true,
		themes: {
			light: {
				primary: colors.blue
				//secondary: colors.indigo
				//accent: "#8c9eff",
				//error: "#b71c1c"
			}
		}
	}
});
