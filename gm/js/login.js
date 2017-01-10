mui.plusReady(function() {

	mui.init();
	
	/*var indexPage = mui.preload({
		url:ipAdd+"/index.html",
	    id:"index.html",
	    styles:{
	      top:0,//新页面顶部位置
	      bottom:0//新页面底部位置
	    }
	});*/

	/**
	 * 复选框改变事件
	 */
	mui(document.body).on('change', 'input[type=checkbox]', function() {
		var value = this.checked ? "true" : "false";
		h(this).val(value);
	});
	
	/**
	 * 师傅加盟点击事件
	 */
	h("#join").tap(function(){
		mui.openWindow("/pages/merchant_franchise.html");
	});

	/**
	 * 登录点击事件
	 */
	mui(document.body).on('tap', '.mui-btn', function(e) {
		var username = trimStr(h("#username").val());
		var password = trimStr(h("#password").val());
		var agreement = h("#agreement").val();
		var _this = this;

		if(agreement === "false") {
			mui.toast('您未同意违约标准约束');
		} else if(username == "") {
			mui.toast("用户名不能为空");
		} else if(password == "") {
			mui.toast("密码不能为空");
		} else {
			mui(this).button('loading');

			//请求后台
			//mui.getJSON("/datas/login.json", {}, function(data) {
				if("admin" === username && "111111" == password) {
					mui.openWindow({
					    url:"/index.html",
					    id:"index.html",
					    styles:{
					      top:0,//新页面顶部位置
					      bottom:0//新页面底部位置
					    }
					});
					/*plus.webview.show(indexPage);*/
				} else {
					mui.toast("用户名或密码错误");
				}

				mui(_this).button('reset');
			//});
		}
	});
});