/**
 * 项目IP前缀
 */
var ipAdd = "http://192.168.0.102:8020/gm";

/**
 * 让 AJAX 用 POST 方式提交
 * @param {String} url 提交路径
 * @param {Object} data 提交参数
 * @param {Function} successFun 成功回调
 * @param {Function} errorFun 失败回调
 */
function ajaxPost(url, data, successFun, errorFun){
	mui.ajax(url,{
		data:data,
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{'Content-Type':'application/json'},	              
		success:successFun,
		error:errorFun
	});  
}

/**
 * 去掉字符首位空格
 * @param {String} str 字符串
 */
function trimStr(str){
	return str.replace(/(^\s*)|(\s*$)/g,"");
}