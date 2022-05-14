export const blockTemplate: string = `
<div class="modal modal__container {{showModal}}">
  <div class="modal__box">
  <button onclick="{{onCloseModal}}" class="modal__close-btn">
  <img src="{{closeIcon}}" />
  </button>
  <h2 class="modal__header">{{ header }}</h2>
  {{modalBody}} 
  </div>
</div>
  `;
