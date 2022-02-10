export const blockTemplate: string = `
<div class="chat" id="chat">
    <div class="chat__messages-container">
    <div class="chat__header-fixed">
      <a href="#/profile" class="chat__profile-button">Profile
      <img class="chat__button-img" src="{{ arrowImg }}" />
      </a>
      <div class="chat__search-container">
          <input placeholder="Search" id="search-input" name="search-input" style="background-image: url({{ loupeImg }})" class="chat__search-field">
      </div>
    </div> 
    
    <div class="modal modal__container">
    <div class="modal__box">
    <h2 class="modal__header">{{ modalHeader }}</h2>
    {{form}}   
    </div>
  </div>
  
      <button class="chat__message message">
        <div class="message__avatar"></div>
        <div class="message__info">
          <div class="message__name-container">
            <h2 class="message__name">Kate</h2>
            <p class="message__time">15:12</p>
          </div>
          <div class="message__text-container">
            <p class="message__text"><span class="message__text-you">You: </span>cdvcdvcdv</p>
            <div class="message__number">3</div>
          </div>
        </div>
    </button>
    </div>
  
    <div class="chat__main-container main-message">
    <p class="chat__select-message">Select chat to send a message</p>
  
    <div class="main-message__header">
      <div class="main-message__avatar-container">
        <div class="main-message__avatar message__avatar"></div>
        <h1 class="main-message__name">Kate</h1>
      </div>
      <button class="main-message__more-button">
        <img src="{{ optionImg }}" />
      </button>
      <nav class="modal-message modal-message_options">
          <button class="option__button">
            <img src="{{ addImg }}" />
            Add user
          </button>
  
          <button class="option__button">
            <img src="{{ removeImg }}" />
            Remove user
          </button>
  
          <button class="option__button option__button_delete">
            <img src="{{ trashImg }}" />
            Delete chat
          </button>
        </nav>
    </div>
  
    <div class="chat__main-messages">
      <p class="chat__main-date">19 september</p>
      {{message}}
  
      <div class="chat__message-container message-main outcome-message outcome-message_clicked">
        <p class="message-main__text">Круто!</p>
        <div class="message-main__date">
          <img class="message-main__read" src="{{ checkedImg }}" />
          <img class="message-main__read-white" src="{{ checkedWhiteImg }}" />
          11:56
        </div>
      </div>

      <div class="chat__message-container message-main income-message">
        <p class="message-main__text">
          Привет! Смотри, тут всплыл интересный кусок лунной космической истории —
          НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для
          полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500
          EL — и к слову говоря, все тушки этих камер все еще находятся на
          поверхности Луны, так как астронавты с собой забрали только кассеты с
          пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то
          пошло не так и на ракету они так никогда и не попали. Всего их было
          произведено 25 штук, одну из них недавно продали на аукционе за 45000
          евро.
        </p>
        <div class="message-main__date">11:56</div>
      </div>

      <div class="chat__message-container message-main outcome-message">
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

    </div>
  
    <div class="main-message__bottom">
    <nav class="modal-message modal-message_attachments">
          <button class="option__button">
            <img src="{{ pictuteImg }}" />
            Photo or Video
          </button>
  
          <button class="option__button">
            <img src="{{ fileImg }}" />
            File
          </button>
  
          <button class="option__button">
            <img src="{{ locationImg }}" />
            Location
          </button>
        </nav>
      <button class="main-message__option-btn">
        <img src="{{ attachImg }}" />
      </button>
      <form name="send-message" class="main-message__form" novalidate>
        <input name="message" placeholder="Message" id="message" class="main-message__input" />
        <button type="submit" class="main-message__send-btn">
          <img src="{{ nextImg }}" />
        </button>
      </form>
    </div>
  </div>
  
  </div>
  `;
