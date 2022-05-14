import { blockTemplate } from "./messenger.tmpl";
import "./messenger.scss";
import arrowImg from "../../static/images/arrow.svg";
import loupeImg from "../../static/images/loupe.svg";
import optionImg from "../../static/images/option-icon.svg";
import addImg from "../../static/images/add-icon.svg";
import removeImg from "../../static/images/remove-icon.svg";
import checkedImg from "../../static/images/checked-icon.svg";
import checkedWhiteImg from "../../static/images/checked-icon-white.svg";
import trashImg from "../../static/images/trash-icon.svg";
import editImg from "../../static/images/edit-icon.svg";
import copyImg from "../../static/images/copy-icon.svg";
import attachImg from "../../static/images/attach-icon.svg";
import nextImg from "../../static/images/next-icon.svg";
import pictuteImg from "../../static/images/img-icon.svg";
import fileImg from "../../static/images/file-icon.svg";
import locationImg from "../../static/images/location-icon.svg";
import Form from "../../components/Form/index";
import Message from "../../components/Message/index";
import avatarImg from "../../static/images/avatar-icon.svg";
import Chat from "../../components/Chat/index";
import UserLoginController from "../../../utils/controllers/users-info";
import Block from "../../modules/block/Block";
import ChatController from "../../../utils/controllers/chat";
import { connect } from "../../../utils/mydash/connect";
import Modal from "../../components/Modal/index";
import UserController from "../../../utils/controllers/user-info";
import ChatTokenController from "../../../utils/controllers/chat-token";
interface LoginFormModel {
  login: string;
  password: string;
}

interface ChatFormModel {
  title: string;
}

ChatController.getChats();

type MessengerProps = {
  openAddChatModal: Function;
  openAddUserModal: Function;
  chatName: String;
  chats: Array<object>;
  id: Number;
  openRemoveUserModal: Function;
};

const withChats = connect((state) => state.chats);
connect((state) => state.user);

function websocketConnection(userId: Number, chatId: Number, token: String) {
  const socket = new WebSocket(
    `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
  );
  socket.addEventListener("open", () => {
    console.log("Соединение установлено");

    socket.send(
      JSON.stringify({
        content: "Моё первое сообщение миру!",
        type: "message",
      })
    );
  });

  socket.addEventListener("close", (event) => {
    if (event.wasClean) {
      console.log("Соединение закрыто чисто");
    } else {
      console.log("Обрыв соединения");
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener("message", (event) => {
    console.log("Получены данные", event.data);
  });

  socket.addEventListener("error", (event) => {
    console.log("Ошибка", event.message);
  });
}

class Messenger extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super("div", props);
    this.setProps({
      openAddChatModal: () => this.children.modal.openModal(),
      openAddUserModal: () => this.children.modalAddUser.openModal(),
      openRemoveUserModal: () => this.children.modalRemoveUser.openModal(),
    });
  }

  render() {
    this.children.message = new Message({});
    this.children.chats = this.props.chats
      ? this.props.chats.map((chatProps: any) => {
          const chat: Chat = new Chat({
            name: chatProps.title,
            avatar: chatProps.avatar
              ? "https://ya-praktikum.tech/api/v2/resources" + chatProps.avatar
              : avatarImg,
            imgWidth: chatProps.avatar ? "100%" : "20px",
            id: chatProps.id,
            events: {
              click: (event: Event) => {
                event.preventDefault();
                ChatTokenController.getToken(chatProps.id).then((data) => {
                  websocketConnection(window.userID, chatProps.id, data.token);
                });
                let chatData = chat.props;
                this.setProps({
                  id: chatData.id,
                  chatName: chatData.name,
                });
                document.querySelector(
                  ".chat__main-container_body"
                ).style.display = "flex";
                document.querySelector(
                  ".chat__main-container_select"
                ).style.display = "none";
              },
            },
          });
          return chat;
        })
      : [];

    this.children.modal = new Modal({
      modalBody: new Form({
        formClass: "form-message",
        btnName: "Add",
        onSubmit: (data: ChatFormModel) => {
          ChatController.addChat(data);
          this.children.modal.closeModal();
        },
        type: "submit",
        name: "add-chat",
        className: "auth-form__btn-submit",
        inputs: [
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "username-input",
            inputName: "title",
            inputType: "text",
            inputPlaceholder: " ",
            inputLabel: "Chat title",
            validations: /(?!^\d+$)^[A-Za-z0-9]{3,20}$/,
          },
        ],
      }),
      header: "Add new chat",
    });

    this.children.modalAddUser = new Modal({
      modalBody: new Form({
        formClass: "form-message",
        btnName: "Add",
        onSubmit: (data: LoginFormModel) => {
          const userId = UserLoginController.findUser(data).id;
          let users: {
            users: Array<Number>;
            chatId: Number | undefined;
          } = {
            users: [],
            chatId: undefined
          };
          users.users = [userId];
          users.chatId = this.props.id;
          if (userId) {
            ChatController.addUserToChat(users);
          }
        },
        type: "submit",
        name: "add-user",
        className: "auth-form__btn-submit",
        inputs: [
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "username-input",
            inputName: "login",
            inputType: "text",
            inputPlaceholder: " ",
            inputLabel: "Username",
            validations: /(?!^\d+$)^[A-Za-z0-9]{3,20}$/,
          },
        ],
      }),
      header: "Add user to chat",
    });

    this.children.modalRemoveUser = new Modal({
      modalBody: new Form({
        formClass: "form-message",
        btnName: "Remove",
        onSubmit: (data: LoginFormModel) => {
          const userId = UserLoginController.findUser(data).id;
          let users: {
            users: Array<Number>;
            chatId: Number | undefined;
          } = {
            users: [],
            chatId: undefined
          };
          users.users = [userId];
          users.chatId = this.props.id;
          if (userId) {
            ChatController.removeUserFromChat(users);
          }
        },
        type: "submit",
        name: "remove-user",
        className: "auth-form__btn-submit",
        inputs: [
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "username-input",
            inputName: "login",
            inputType: "text",
            inputPlaceholder: " ",
            inputLabel: "Username",
            validations: /(?!^\d+$)^[A-Za-z0-9]{3,20}$/,
          },
        ],
      }),
      header: "Remove user from chat",
    });

    return this.compile(blockTemplate, {
      modal: this.children.modal,
      openAddChatModal: this.props.openAddChatModal,
      openAddUserModal: this.props.openAddUserModal,
      openRemoveUserModal: this.props.openRemoveUserModal,
      message: this.children.message,
      chats: this.children.chats,
      arrowImg: arrowImg,
      modalHeader: "Add user",
      loupeImg: loupeImg,
      optionImg: optionImg,
      addImg: addImg,
      removeImg: removeImg,
      checkedImg: checkedImg,
      checkedWhiteImg: checkedWhiteImg,
      trashImg: trashImg,
      editImg: editImg,
      copyImg: copyImg,
      attachImg: attachImg,
      nextImg: nextImg,
      pictuteImg: pictuteImg,
      fileImg: fileImg,
      locationImg: locationImg,
      chatName: this.props.chatName,
      modalAddUser: this.children.modalAddUser,
      modalRemoveUser: this.children.modalRemoveUser,
    });
  }
}
export default withChats(Messenger);
