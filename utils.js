/**
 * 请求头字符串信息转化为Object
 * @param  {[type]} xhr [XMLHttpRequest对象]
 * @return {[type]}     [请求头信息对象字面量]
 */
function responseHeaderToObject(xhr) {
	var resArray 	   = encodeURI(xhr.getAllResponseHeaders()).split('%0D%0A'),
		responseHeader = {};

	for(var i = 0, l = resArray.length; i < l-1; i++) {
	  var val = resArray[i],limit = val.indexOf(':');
	  
	  responseHeader[val.substr(0,limit)] = decodeURI(val.substr(limit+1)).trim();
	}
	return responseHeader;
}