mui.ready(function(){
	
	mui.init();
	
	//添加银行卡点击事件
	h("#addBank").tap(function(){
		mui.openWindow({
		    url:"bank_card_add.html",
		    id:"bank_card_add.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
});