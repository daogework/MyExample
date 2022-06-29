


var encryptKey = null


function packMsg(pbname,/*Uint8Array*/pbdata,mod=0){
    var length = 5 + pbname.length + 1 + pbdata.byteLength
    var encoder = new TextEncoder()
    var strBytes = encoder.encode(pbname)
    var head = new Uint8Array(5)
    head = intToByteArray(length,head)
    head[4] = mod 
    return concatenateArrays(head,strBytes,new Uint8Array(1), pbdata)
}

function packPbMsg(pbname,jsonlike){
    var sarr = pbname.split('.')
    var pb = $root[sarr[0]][sarr[1]]
    var msg = pb.create(jsonlike)
    var buffer = pb.encode(msg).finish()
    return packMsg(pbname,buffer)
}


function handleBytesData(recvBuffer){
    
    if(encryptKey!=null){
        // console.log('encryptKey',encryptKey)
        rc4(encryptKey, recvBuffer)
    }


    let index = 0
    for(let i=0;i<recvBuffer.byteLength;i++){
      if(recvBuffer[i]==0){
        index = i
        break
      }
    }

    console.log('recvBuffer:',recvBuffer)
    console.log('index:',index)

    var decoder = new TextDecoder()
    var pbname = decoder.decode(recvBuffer.slice(0,index))
    console.log("pbname:"+pbname)

    var pbdata = recvBuffer.slice(index+1)
    //尝试发送确认包但是服务器提示不对,没搞懂
    // var data = packMsg(pbname,new Uint8Array(),64)
    // socket.send(data);
    // console.log('确认包',buf2hex(data.buffer))

    if(pbname=='CLGT.KeepAliveAck')
        return//不用特别处理

    handlePbBytesData(pbname, pbdata)
}

function unpackPbMsg(pbname, pbdata){
    var sarr = pbname.split('.')
    var pb = $root[sarr[0]][sarr[1]]
    return pb.decode(pbdata)
}

function handlePbBytesData(pbname, pbdata){
    var sarr = pbname.split('.')
    if(sarr[0]=='CLPF'){//平台的消息先忽略吧
        return
    }
    var message = unpackPbMsg(pbname, pbdata)
    console.log(message)
    switch(pbname){
        case "CLGT.HandAck":
            // var message = HandAck.decode(pbdata)
            
            encryptKey = message.randomKey
            setInterval(() => {//发送心跳包
                var data = packMsg("CLGT.KeepAliveReq",new Int8Array())
                socket.send(data);
              }, 10000);
            //TO DO 更改登录类型 注意loginType不能写成.proto里面的login_type
            socket.send(packPbMsg('CLGT.LoginReq',{'loginType':1,'token':'test111'}))
            // socket.send(packPbMsg('CLGT.KeepAliveReq',{}))
            break
        case 'CLGT.LoginAck':
            console.log('用户名:'+message.nickname+" userId:"+message.userId)
            break
    }
}