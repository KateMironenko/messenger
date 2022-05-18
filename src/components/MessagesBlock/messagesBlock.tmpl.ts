export const blockTemplate: string = `
<div class="chat__main-messages">
<p class="chat__main-date">19 september</p>


<div style="display: none" class="chat__message-container message-main outcome-message outcome-message_clicked">
  <p class="message-main__text">Круто!</p>
  <div class="message-main__date">
    <img class="message-main__read" src="{{ checkedImg }}" />
    <img class="message-main__read-white" src="{{ checkedWhiteImg }}" />
    11:56
  </div>
</div>

<div style="display: none" class="chat__message-container message-main outcome-message">
  <nav class="outcome-message__modal modal-message ">
    <ul class="outcome-message__options">
     <li>
      <button class="outcome-message__option-bt">
        <img src="{{ trashImg }}" />
      </button>
      </li>
      <li>
      <button class="outcome-message__option-bt">
        <img src="{{ editImg }}" />
      </button>
      </li>
      <li>
      <button class="outcome-message__option-bt">
        <img src="{{ copyImg }}" />
      </button>
      </li>
    </ul>
  </nav>
  <p class="message-main__text">Круто!</p>
  <div class="message-main__date">
    <img class="message-main__read" src="{{ checkedImg }}" />
    <img class="message-main__read-white" src="{{ checkedWhiteImg }}" />
    11:56
  </div>
</div>

{{message}}
</div>
  `;
