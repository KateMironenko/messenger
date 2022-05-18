import HTTP from './http';
import {BaseAPI} from './base-api';

const userInfoAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/');
interface UserFormModel {
  chatId: string;
}

class ChatsTokenAPI extends BaseAPI {
  async create(chatId: UserFormModel) {
    return userInfoAPIInstance
      .post(`chats/token/${chatId}`)
      .then((response: any) => JSON.parse(response.responseText));
  }
}

export default ChatsTokenAPI;
