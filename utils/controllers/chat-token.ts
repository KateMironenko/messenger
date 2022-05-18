import ChatTokenAPI from '../api/chat-token';

interface ChatTokenModel {
  chatId: string;
}

const chatTokenAPI = new ChatTokenAPI();

class ChatTokenController {
  public async getToken(data: ChatTokenModel) {
    try {
      return chatTokenAPI.create(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatTokenController();
