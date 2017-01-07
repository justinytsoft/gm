/**
 * 复选框改变事件
 */
mui(document.body).on('change', 'input[type=checkbox]', function() {
	var value = this.checked?"true":"false";
	h(this).val(value);
});

/**
 * 登录点击事件
 */
mui(document.body).on('tap', '.mui-btn', function(e) {
    var username = trimStr(h("#username").val());
    var password = trimStr(h("#password").val());
    var agreement = h("#agreement").val();
    var _this = this;
    
    if(agreement === "false"){
    	mui.toast('您未同意违约标准约束');
    }else if(username==""){
    	mui.toast("用户名不能为空");
    }else if(password==""){
    	mui.toast("密码不能为空");
    }else{
    	mui(this).button('loading');
    	
    	//请求后台
    	mui.getJSON(ipAdd+"/datas/login.json",{},function(data){
  			if(data.username === username && data.password==password){
  				mui.toast("登录成功");
  			}else{
  				mui.toast("用户名或密码错误");
  			}
  			
  			mui(_this).button('reset');
    	});    	
    }
});