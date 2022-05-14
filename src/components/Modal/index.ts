import { blockTemplate } from "./modal.tmpl";
import "./modal.scss";
import removeImg from "../../static/images/remove-icon.svg";
import Block from "../../modules/block/Block";

type ModalProps = {};
export default class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super("div", props);
    this.setProps({
      onCloseModal: () =>
        this.closeModal()
    });
  }

  openModal() {
    this.setProps({
      showModal: "modal-show",
      closeIcon: removeImg,
    });
  }

  closeModal(){
    this.setProps({
      showModal: "",
    })
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
