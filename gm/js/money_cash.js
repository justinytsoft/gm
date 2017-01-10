mui.ready(function(){
	
	mui.init();
	
	//提现点击事件
	h("#bankList").tap(function(){
		mui.openWindow({
		    url:"bank_card_list.html",
		    id:"bank_card_list.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
});