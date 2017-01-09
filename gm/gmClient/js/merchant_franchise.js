//拍照  
function getImage(obj) {  
    var cmr = plus.camera.getCamera();  
    cmr.captureImage(function(p) {  
        plus.io.resolveLocalFileSystemURL(p, function(entry) {  
            var localurl = entry.toLocalURL(); //  
            h(obj).attr('src' ,localurl);  
        });  
    });  
}  
//相册选取  
function galleryImgs(obj) {  
    plus.gallery.pick(function(e) {  
        //alert(e);  
        h(obj).attr("src", e);  
    }, function(e) {  
        //outSet( "取消选择图片" );  
    }, {  
        filter: "image"  
    });  
}  
//打开底部弹窗
function showActionSheet(obj) {  
    var bts = [{  
        title: "拍照"  
    }, {  
        title: "从相册选择"  
    }];  
    plus.nativeUI.actionSheet({  
            cancel: "取消",  
            buttons: bts  
        },  
        function(e) {  
            if (e.index == 1) {  
                getImage(obj);  
            } else if (e.index == 2) {  
                galleryImgs(obj);  
            }  
            //outLine( "选择了\""+((e.index>0)?bts[e.index-1].title:"取消")+"\"");  
        }  
    );  
}  
