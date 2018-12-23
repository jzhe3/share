var imgData ='';
var type = 'png';
function downloadFile(){
    html2canvas($(".pt18")).then(function(canvas) {
          canvas.id='mycanvas';
          document.body.appendChild(canvas);
          var canvas = document.getElementById("mycanvas");
          imgData = canvas.toDataURL(type);
          location = imgData;

         // 加工image data，替换mime type
         imgData = imgData.replace(_fixType(type),'image/octet-stream');

        // 下载后的问题名
        var filename = '二维码 .' + type;
        // download
        saveFile(imgData,filename);
    });
}


/**
 * 获取mimeType
 * @param  {String} type the old mime-type
 * @return the new mime-type
 */
var _fixType = function(type) {
    type = type.toLowerCase().replace(/jpg/i, 'jpeg');
    var r = type.match(/png|jpeg|bmp|gif/)[0];
    return 'image/' + r;
};



/**
 * 在本地进行文件保存
 * @param  {String} data     要保存到本地的图片数据
 * @param  {String} filename 文件名
 */
var saveFile = function(data, filename){
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = data;
    save_link.download = filename;

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
};
function takeScreenshot() {
  		console.log('canvas'); 
    	html2canvas(document.getElementById('map'), {
        	onrendered: function(canvas) {
            	document.body.appendChild(canvas);
        	},
      		// width: 300, 
      		// height: 300
    	});
	}
