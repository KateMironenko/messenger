import HTTP from './http';
import {BaseAPI} from './base-api';

const chatAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats');
interface ChatFormModel {
  title: string;
}

interface ChatUserFormModel {
  users: Array<Number>;
  chatId: Number | undefined;
}

class ChatAPI extends BaseAPI {
  async update(user: ChatUserFormModel) {
    return chatAPIInstance.put('/users', {data: JSON.stringify(user)});
  }

  async delete(user: ChatUserFormModel) {
    return chatAPIInstance.delete('/users', {data: JSON.stringify(user)});
  }

  async create(chat: ChatFormModel) {
    return chatAPIInstance.post('', {data: JSON.stringify(chat)});
  }

  async request() {
    return chatAPIInstance
      .get('')
      .then((response: any) => JSON.parse(response.responseText));
  }
}

export default ChatAPI;
