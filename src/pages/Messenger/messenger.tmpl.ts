export const blockTemplate: string = `
<div class="chat" id="chat">
    <div class="chat__messages-container">
    <div class="chat__header-fixed">
    <div class="chat__header-buttons">
    <button onclick="{{openAddChatModal}}" class="chat__header-button">
            <img src="{{ addImg }}" />
            Add chat
          </button>
      <a href="/settings" class="chat__profile-button">Profile
      <img class="chat__button-img" src="{{ arrowImg }}" />
      </a>
      </div>
      <div class="chat__search-container">
          <input placeholder="Search" id="search-input" name="search-input" style="background-image: url({{ loupeImg }})" class="chat__search-field">
      </div>
    </div> 

    {{modal}}
    
    {{modalAddUser}}

    {{modalRemoveUser}}
  
     {{chats}}
    </div>
  
    <div class="chat__main-container main-message">
    <div class="chat__main-container_body">  
    <div class="main-message__header">
      <div class="main-message__avatar-container">
        <div class="main-message__avatar message__avatar"></div>
        <h1 class="main-message__name">{{chatName}}</h1>
      </div>
      <button onclick="{{openChatMenu}}" class="main-message__more-button">
        <img src="{{ optionImg }}" />
      </button>
      <nav class="modal-message modal-message_options">
          <button onclick="{{openAddUserModal}}" class="option__button">
            <img src="{{ addImg }}" />
            Add user
          </button>
  
          <button onclick="{{openRemoveUserModal}}" class="option__button">
            <img src="{{ removeImg }}" />
            Remove user
          </button>
  
          <button class="option__button option__button_delete">
            <img src="{{ trashImg }}" />
            Delete chat
          </button>
        </nav>
    </div>
  
   {{messages}}
  
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
      <button onclick="{{openAttachmentMenu}}" class="main-message__option-btn">
        <img src="{{ attachImg }}" />
      </button>
      <form name="send-message" class="main-message__form" novalidate>
      {{ messageInput}}
        {{sendBtn}}
      </form>
    </div>
  </div>
  <div class="chat__main-container_select">
  <p class="chat__select-message">Select chat to send a message</p>
  </div>
  </div>
  </div>
  `;
