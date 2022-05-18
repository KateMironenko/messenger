export const blockTemplate: string = `
      <div class="chat__message-container message-main income-message {{messageType}}">
        <p class="message-main__text">
          {{text}}
        </p>
        <div class="message-main__date">{{time}}
        <img class="{{isRead}}" src="{{ checkedImg }}" />
        </div>
      </div>
  `;
