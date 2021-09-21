const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
	configureWebpack: {
		//devServer: {
		//	hot: false
		//},
		plugins: [
			//new BundleAnalyzerPlugin({
			//	openAnalyzer: false
			//})
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@comp": path.resolve(__dirname, "src/vue/components"),
				"@utils": path.resolve(__dirname, "src/vue/utils"),
				"@pages": path.resolve(__dirname, "src/vue/pages"),
				"@layout": path.resolve(__dirname, "src/vue/layout")
			}
		}
	},

	publicPath: process.env.NODE_ENV === "production" ? "/vue-social-network/dist/" : "/",
	transpileDependencies: ["vuetify"],
	pluginOptions: {
		i18n: {
			locale: "en",
			fallbackLocale: "ru",

			enableInSFC: true
		}
	}
};
