// "off"或者0  //关闭规则关闭
// "warn"或者1  //在打开的规则作为警告（不影响退出代码）
// "error"或者2  //把规则作为一个错误（退出代码触发时为1）
module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: ["plugin:vue/essential"],

	rules: {
		"no-console": "off",
		"no-debugger": "off",
		quotes: ["error", "double"],
		"eqeqeq": [2, 'allow-null'], // 使用 === 替代 ==
		"no-const-assign": 2, //禁止修改const声明的变量
		"no-control-regex": 0, //禁止在正则表达式中使用控制字符
		"no-delete-var": 2, //不能对var声明的变量使用delete操作符
		"no-dupe-args": 2, //函数参数不能重复s
		"no-eq-null": 2, //禁止对null使用==或!=运算符
		"no-extra-boolean-cast": 2, //禁止不必要的bool转换
		"no-extra-parens": 0, //禁止非必要的括号
		"no-extra-semi": 2, //禁止多余的冒号
		"no-fallthrough": 1, //禁止switch穿透
		"no-implicit-coercion": 1, //禁止隐式转换
		"camelcase": 2, //强制驼峰法命名
		"eqeqeq": 2, //必须使用全等
		"func-names": 0, //函数表达式必须有名字
		"no-var": 2, //对var禁止
	},

	parserOptions: {
		parser: "babel-eslint"
	},
};