let wsocket=0;

function openWebSocketSetId(id,url_ws){
  if (window["WebSocket"]) { //check browser support
    connectws(id,url_ws).then(function(server) {
      wsocket=server;
    }).catch(function(err) {
      console.log("socket error");
    });
  } else {
      alert("Please Update Your browser to the latest version.");
  }
}

function connectws(id,url_ws) {
  return new Promise(function(resolve, reject) {
      let wsconn = new WebSocket(atob(url_ws));
      wsconn.onopen = function() {
        wsconn.send(id);
        console.log("connected and set id");
        resolve(wsconn);
      };
      wsconn.onerror = function(err) {
        console.log("socket error rejected");
        reject(err);
      };
      wsconn.onclose = function (evt) {
        console.log("connection closed");
      };
      wsconn.onmessage = function (evt) {
        let messages = evt.data;
        console.log("incoming message");
        catcher(messages);
      };

  });
}

function closeWebSocket(){
  if (wsocket !== 0){
    wsocket.close();
  }
}

function sendMessagetoWebSocket(msg){
  if (wsocket.readyState === WebSocket.OPEN){
    wsocket.send(msg);
  }
}