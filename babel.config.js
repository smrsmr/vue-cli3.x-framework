const plugins = [];
if (process.env.NODE_ENV === "production") {
	// 配置生成环境去除console.log
	plugins.push("transform-remove-console");
}
module.exports = {
	env: {
		development: {
			sourceMaps: true,
			retainLines: true
		}
	},
	presets: [
		[
			"@vue/app",
			{
				polyfills: ["es6.promise", "es6.symbol"],
				useBuiltIns: "entry"
			}
		],
		["@babel/preset-env", {
			useBuiltIns: "entry", // or "usage"
			corejs: 3,
		}]
	],
	plugins: [
		[
			"component",
			{
				libraryName: "element-ui",
				styleLibraryName: "theme-chalk"
			}
		]
	]
};