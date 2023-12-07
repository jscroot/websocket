# websocket
websocket

```js
url_ws = btoa("https://jscroot.github.io/ws");
id = "whatever things identification"
let wsocket=openWebSocketSetId(id,url_ws)

sendMessagetoWebSocket(msg,wsocket)
closeWebSocket(wsocket)
```

https://cdn.jsdelivr.net/gh/jscroot/websocket/ 

## Release

Tag version
```sh
git tag                                 	#check current version
git tag v0.0.3                          	#set tag version
git push origin --tags  
```