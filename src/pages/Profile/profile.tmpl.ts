export const blockTemplate: string = `
<div class="profile" id="profile">
  <a href="/messenger" class="profile__back-link">
    <img class="profile__back-img" src="{{ backImg }}" />
  </a>

  {{modal}}

  <div class="profile__container">
    <button onclick="{{openAvatarModal}}" class="profile__avatar">
      <img class="profile__avatar-icon" src="{{ pictuteImg }}" />
      <img class="profile__avatar-icon_edit" src="{{ pictuteEditImg }}" />
    </button>

    <h1 class="profile__name">{{ firstName }}</h1>

    {{form}}

    {{passwordForm}}
    <div class="profile__buttons">
      <button onclick="{{editProfile}}" class="profile__action-button">Edit profile</button>
      <button onclick="{{changePassword}}" class="profile__action-button">Change password</button>
      <button onclick="{{logout}}" class="profile__action-button profile__action-button_red">
        Logout
      </button>
    </div>
  </div>
</div>
  `;
