import ChatTokenAPI from "../api/chat-token"
import store from "../store/store";

interface ChatTokenModel {
  chatId: string;
}

const chatTokenAPI = new ChatTokenAPI ();

class ChatTokenController {
  public async getToken(data: ChatTokenModel) {
    try {
      return chatTokenAPI.create(data)
    } catch (error) {
        console.log(error)
    }
  }
}

export default new ChatTokenController()
