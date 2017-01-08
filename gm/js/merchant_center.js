mui.ready(function(){
	
	mui.init();
	
	//头像点击事件
	h("#headImg").tap(function(){
		
	});
	
	//联系人点击事件
	h("#linkman").tap(function(){
		mui.openWindow(ipAdd + "/pages/linkman.html");
	});
	
	//联系人身份证点击事件
	h("#linkmanIdcard").tap(function(){
		mui.openWindow(ipAdd + "/pages/linkman_idcard.html");
	});
	
	
});