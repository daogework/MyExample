/**
 * SocketInstance 连接实例
 *
 * 注释: 所有 WebSocket 消息接收处理在此实例中处理
 */
class SocketInstance {
  /**
   * WsSocket 实例
   */
  socket

  /**
   * SocketInstance 初始化实例
   */
  constructor() {
    this.socket = new WsSocket(
      () => {
        return 'wss://im-api.gzydong.club/wss/default.io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWFyZCI6ImFwaSIsImV4cCI6MTY1NjE0OTM2NCwianRpIjoiMjA1NCJ9.C6jCy1lR8biKgJ_IvXvGsnTvhgIPeVh-ZponWm161Ek'
      }, {
        onError(evt) {
          console.log('Websocket 连接失败回调方法')
        },
        // Websocket 连接成功回调方法
        onOpen(evt) {

        },
        // Websocket 断开连接回调方法
        onClose(evt) {
          // 更新 WebSocket 连接状态
        },
      },
    )

    this.registerEvents()
  }

  // 连接 WebSocket 服务
  connect() {
    this.socket.connection()
  }

  /**
   * 注册回调消息处理事件
   */
  registerEvents() {
    this.socket.on('heartbeat', data => {})

    // this.socket.on('event_talk', data => {
    //   new TalkEvent(data).handle()
    // })

    // this.socket.on('event_login', data => {
    //   new LoginEvent(data).handle()
    // })

    this.socket.on('event_error', data => {
      // ElNotification({
      //   title: '友情提示',
      //   message: data.message,
      //   type: 'warning',
      // })
    })
  }

  /**
   * 聊天发送数据
   *
   * @param {Object} mesage
   */
  send(mesage) {
    this.socket.send(mesage)
  }

  /**
   * 推送消息
   *
   * @param {String} event 事件名
   * @param {Object} data 数据
   */
  emit(event, data) {
    this.socket.emit(event, data)
  }
}
