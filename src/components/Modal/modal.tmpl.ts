export const blockTemplate: string = `
<div class="modal modal__container">
  <div class="modal__box">
  <h2 class="modal__header">{{ header }}</h2>
  <form class="modal__body" novalidate>
  {{modalBody}}   
      <button type="submit" class="modal__submit-btn">{{ btnName }}</button>
    </form>
  </div>
</div>
  `;
