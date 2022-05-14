export const blockTemplate: string = `
<button class="chat__message message">
<div class="message__avatar"><img style="width: {{imgWidth}}" src="{{avatar}}" /></div>
<div class="message__info">
  <div class="message__name-container">
    <h2 class="message__name">{{name}}</h2>
    <p class="message__time">{{time}}</p>
  </div>
  <div class="message__text-container">
    <p class="message__text"><span class="message__text-you">{{lastMessageName}}: </span>{{lastMessage}}</p>
    <div class="message__number">{{count}}</div>
  </div>
</div>
</button>
  `;
