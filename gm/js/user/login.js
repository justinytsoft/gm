mui(document.body).on('tap', '.mui-btn', function(e) {
    mui(this).button('loading');
    
    
    /*setTimeout(function() {
        mui(this).button('reset');
    }.bind(this), 2000);*/
});