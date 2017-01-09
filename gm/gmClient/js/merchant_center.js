mui.ready(function(){
	
	mui.init();
	
	//头像点击事件
	h("#headImg").tap(function(){
		
	});
	
	//联系人点击事件
	h("#linkman").tap(function(){
		mui.openWindow({
		    url:ipAdd + "/pages/linkman.html",
		    id:"linkman.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
	//联系人身份证点击事件
	h("#linkmanIdcard").tap(function(){
		mui.openWindow({
		    url:ipAdd+"/pages/linkman_idcard.html",
		    id:"linkman_idcard.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
	//手机号点击事件
	h("#phone").tap(function(){
		mui.openWindow({
		    url:ipAdd+"/pages/phone.html",
		    id:"phone.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
	//详细地址点击事件
	h("#address").tap(function(){
		mui.openWindow({
		    url:ipAdd+"/pages/address.html",
		    id:"address.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
	//营业时间点击事件
	h("#businessHours").tap(function(){
		mui.openWindow({
		    url:ipAdd+"/pages/business_hours.html",
		    id:"business_hours.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
});