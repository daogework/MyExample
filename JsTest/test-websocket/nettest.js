var $root = protobuf.roots["default"] || (protobuf.roots["default"] = {});
var HandReq = $root.CLGT.HandReq
var HandAck = $root.CLGT.HandAck


var socket = new WebSocket("ws://8.210.206.80:16001");
socket.binaryType = "arraybuffer"
socket.onopen = function (e) {
  console.log("[open] Connection established");
  var data = packPbMsg("CLGT.HandReq",{ 'platform': 1, 'product': 1, 'version': 1, 'device': "device1", 'channel': 1, 'country': 'country1' })
  socket.send(data);
};

var recvBuffer = new Uint8Array()

socket.onmessage = function (event) {
  // console.log(`[message] Data received from server: ${event.data}`);
  var buffer = new Uint8Array(event.data)

  recvBuffer = concatenateArrays(recvBuffer,buffer)

  if(recvBuffer.byteLength>=4){
    packlen = byteArrayToInt(recvBuffer)
    if(packlen-5 > 0 && recvBuffer.byteLength >= packlen){
      handleBytesData(recvBuffer.slice(5,packlen))
      recvBuffer = recvBuffer.slice(packlen)
    }
  }
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log('[close] Connection died');
  }
};

socket.onerror = function (error) {
  console.log(`[error] ${error.message}`);
};