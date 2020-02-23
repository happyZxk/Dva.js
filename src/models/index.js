// 将所有的models统一处理暴漏给入口文件引用
const context = require.context("./", false, /\.js$/);
console.log("context", context.keys());
export default context
    .keys()
    .filter(item => item !== "./index.js")
    .map(key => context(key))