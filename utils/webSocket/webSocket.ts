export default class WebSocketConnection {
  private socket;
  public messages: Array<any>;

  static _socket: WebSocketConnection | null;

  constructor(userId?: Number, chatId?: Number, token?: string) {
    if (userId && chatId && token) {
      console.log(chatId);
      WebSocketConnection._socket = null;
      this.socket = new WebSocket(
        `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
      );
      this.socket.addEventListener("open", this.open);
      this.socket.addEventListener("close", this.close);
      this.socket.addEventListener("message", this.message);
      this.socket.addEventListener("error", this.error);
    }
    if (WebSocketConnection._socket) {
      return WebSocketConnection._socket;
    } else {
      WebSocketConnection._socket = this;
    }
  }

  send(
    message: { content?: string; type: string },
    callback: Function = () => {}
  ) {
    let that = this;
    this.waitForConnection(function () {
      that.socket?.send(JSON.stringify(message));
      if (typeof callback !== "undefined") {
        callback();
      }
    });
  }

  open() {
    console.log("Соединение установлено");
  }

  waitForConnection(callback: Function) {
    if (WebSocketConnection._socket?.socket?.readyState === 1) {
      callback();
    } else {
      var that = this;
      setTimeout(function () {
        that.waitForConnection(callback);
      }, 100);
    }
  }

  getMessages(messagesCount: string = "0") {
    this.send({
      type: "get old",
      content: messagesCount,
    });
  }

  ping(): void {
    setInterval(() => {
      this.send({ type: "message", content: "" });
    }, 500);
  }

  close(event: any) {
    if (event.wasClean) {
      console.log("Соединение закрыто чисто");
    } else {
      console.log("Обрыв соединения");
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  }

  message(event: any) {
    console.log("Получены данные", event.data);
    if (WebSocketConnection._socket)
      WebSocketConnection._socket.messages = JSON.parse(event.data);
  }

  error(event: any) {
    console.log("Ошибка", event.message);
  }
}
