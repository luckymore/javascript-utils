# javascript-utils

#### responseHeaderToObject
    请求头`response Headers`字符串信息转化为`Object`
```javascript
var req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);
var headers = req.getAllResponseHeaders();

responseHeaderToObject(req);
```
<img src="./imgs/httpStringHeaders.png">
<img src="./imgs/httpObjectHeaders.png">

