import ChatAPI from "../api/chat-api";
import store from "../store/store";

interface ChatFormModel {
  title: string;
}

interface ChatUserFormModel {
  users: Array<Number>;
  chatId: Number | undefined;
}

const chatApi = new ChatAPI();

class ChatController {
  public async getChats() {
    try {
      chatApi.request().then((data) => {
        store.set("chats.chats", data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async addChat(data: ChatFormModel) {
    try {
      chatApi.create(data);
      this.getChats();
    } catch (error) {
      console.log(error);
    }
  }

  public async addUserToChat(data: ChatUserFormModel) {
    try {
      chatApi.update(data);
      this.getChats();
    } catch (error) {
      console.log(error);
    }
  }

  public async removeUserFromChat(data: ChatUserFormModel) {
    try {
      chatApi.delete(data);
      this.getChats();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatController();
