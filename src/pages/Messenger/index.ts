import { blockTemplate } from "./messenger.tmpl";
import "./messenger.scss";
import arrowImg from "../../static/images/arrow.svg";
import loupeImg from "../../static/images/loupe.svg";
import optionImg from "../../static/images/option-icon.svg";
import addImg from "../../static/images/add-icon.svg";
import removeImg from "../../static/images/remove-icon.svg";
import trashImg from "../../static/images/trash-icon.svg";
import editImg from "../../static/images/edit-icon.svg";
import copyImg from "../../static/images/copy-icon.svg";
import attachImg from "../../static/images/attach-icon.svg";
import nextImg from "../../static/images/next-icon.svg";
import pictuteImg from "../../static/images/img-icon.svg";
import fileImg from "../../static/images/file-icon.svg";
import locationImg from "../../static/images/location-icon.svg";
import Form from "../../components/Form/index";
import avatarImg from "../../static/images/avatar-icon.svg";
import Chat from "../../components/Chat/index";
import UserLoginController from "../../../utils/controllers/users-info";
import Block from "../../modules/block/Block";
import ChatController from "../../../utils/controllers/chat";
import { connect } from "../../../utils/mydash/connect";
import Modal from "../../components/Modal/index";
import Button from "../../components/Button/index";
import Image from "../../components/Image/index";
import Input from "../../components/Input/index";
import ChatTokenController from "../../../utils/controllers/chat-token";
import WebSocketConnection from "../../../utils/webSocket/webSocket";
import MessagesBlock from "../../components/MessagesBlock";

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
  onMessageSend: Function;
  sendBtn: String;
  messageInput: String;
  openChatMenu: Function;
  openAttachmentMenu: Function;
};

const withChats = connect((state) => state.chats);

function showElement(id: string, isShow: boolean) {
  isShow
    ? (document.querySelector<HTMLElement>(id)!.style.display = "block")
    : (document.querySelector<HTMLElement>(id)!.style.display = "none");
}

class Messenger extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super("div", props);

    this.setProps({
      openAddChatModal: () => this.children.modal.openModal(),
      openAddUserModal: () => {
        this.children.modalAddUser.openModal();
        showElement(".modal-message_options", false);
      },
      openRemoveUserModal: () => {
        this.children.modalRemoveUser.openModal();
        showElement(".modal-message_options", false);
      },
      openChatMenu: () => {
        showElement(".modal-message_options", true);
      },
      openAttachmentMenu: () => {
        showElement(".modal-message_attachments", true);
      },
    });
  }

  render() {
    this.children.messages = new MessagesBlock({
      messages: [],
    });
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
                let token: string;

                ChatTokenController.getToken(chatProps.id)
                  .then((data) => {
                    token = data.token;
                    new WebSocketConnection(
                      window.userID,
                      chatProps.id,
                      data.token
                    );
                  })
                  .then(() => {
                    new WebSocketConnection().getMessages();
                    let that = this;
                    setTimeout(() => {
                      let chatData = chat.props;
                      that.setProps({
                        id: chatData.id,
                        chatName: chatData.name,
                        chatToken: token,
                      });
                      this.children.messages.setProps({
                        messages: new WebSocketConnection().messages,
                      });
                      document.querySelector<HTMLElement>(
                        ".chat__main-container_body"
                      )!.style.display = "flex";
                      document.querySelector<HTMLElement>(
                        ".chat__main-container_select"
                      )!.style.display = "none";
                    }, 500);
                  });
              },
            },
          });
          return chat;
        })
      : [];

    this.children.messageInput = new Input({
      inputContainerClass: " ",
      inputClass: "main-message__input",
      inputId: " ",
      inputName: "message",
      inputType: "text",
      inputPlaceholder: "Message",
      inputLabel: " ",
      valid: true,
      value: " ",
      inputDisabled: " ",
    });

    this.children.sendBtn = new Button({
      className: "main-message__send-btn",
      btnName: new Image({
        className: "",
        pictuteImg: nextImg,
      }),
      type: "submit",
      events: {
        click: (event: Event) => {
          event.preventDefault();
          const message: string =
            this.children.messageInput.props.value.replace(
              /[&<>'"]/g,
              (tag: string) =>
                ({
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  "'": "&#39;",
                  '"': "&quot;",
                }[tag] || tag)
            );
          new WebSocketConnection().send({
            content: message,
            type: "message",
          });
          new WebSocketConnection().getMessages();
          setTimeout(() => {
            this.children.messages.setProps({
              messages: new WebSocketConnection().messages,
            });
          }, 500);

          this.children.messageInput.setProps({
            value: "",
          });
        },
      },
    });

    this.children.modal = new Modal({
      modalBody: new Form({
        formClass: "form-message",
        btnName: "Add",
        onSubmit: (data: ChatFormModel) => {
          ChatController.addChat(data).then(() => {
            this.children.modal.closeModal();
          });
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
            validations: /(?!^\d+$)^[А-Яа-яA-Za-z0-9]{3,20}$/,
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
          let users: {
            users: Array<Number>;
            chatId: Number | undefined;
          };
          UserLoginController.findUser(data)
            .then((response: any) => {
              users = {
                users: [],
                chatId: undefined,
              };
              users.users.push(response[0].id);
              users.chatId = this.props.id;
              console.log(users);
            })
            .then(() => {
              ChatController.addUserToChat(users).then(() => {
                this.children.modalAddUser.closeModal();
              });
            });
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
          let users: {
            users: Array<Number>;
            chatId: Number | undefined;
          };
          UserLoginController.findUser(data)
            .then((response: any) => {
              users = {
                users: [],
                chatId: undefined,
              };
              users.users.push(response[0].id);
              users.chatId = this.props.id;
              console.log(users);
            })
            .then(() => {
              ChatController.removeUserFromChat(users).then(() => {
                this.children.modalRemoveUser.closeModal();
              });
            });
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
      onMessageSend: this.props.onMessageSend,
      messages: this.children.messages,
      chats: this.children.chats,
      arrowImg: arrowImg,
      modalHeader: "Add user",
      loupeImg: loupeImg,
      optionImg: optionImg,
      addImg: addImg,
      removeImg: removeImg,
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
      sendBtn: this.props.sendBtn,
      messageInput: this.props.messageInput,
      openChatMenu: this.props.openChatMenu,
      openAttachmentMenu: this.props.openAttachmentMenu,
    });
  }
}
export default withChats(Messenger);
