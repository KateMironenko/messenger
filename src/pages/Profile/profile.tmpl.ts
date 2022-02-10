export const blockTemplate: string = `
<div class="profile" id="profile">
  <a href="#/chat" class="profile__back-link">
    <img class="profile__back-img" src="{{ backImg }}" />
  </a>

  {{modal}}

  <div class="profile__container">
    <button class="profile__avatar">
      <img class="profile__avatar-icon" src="{{ pictuteImg }}" />
      <img class="profile__avatar-icon_edit" src="{{ pictuteEditImg }}" />
    </button>

    <h1 class="profile__name">{{ firstName }}</h1>

    {{form}}

    {{passwordForm}}


    <form name="edit-password" class="profile__list profile__password-form">
      <div class="profile__item">
        <h2 class="profile__item-name">Old password</h2>
        <input
          type="password"
          value="{{ oldPassword }}"
          class="profile__item-input"
          name="oldPassword"
        />
        <span id="oldPassword-input-error" class="form__item-error"></span>
      </div>

      <div class="profile__item">
        <h2 class="profile__item-name">New password</h2>
        <input
          type="password"
          value="{{ newPassword }}"
          class="profile__item-input"
          name="newPassword"
        />
        <span id="newPassword-input-error" class="form__item-error"></span>
      </div>

      <div class="profile__item">
        <h2 class="profile__item-name">Confirm password</h2>
        <input
          type="password"
          value="{{ confirmPassword }}"
          class="profile__item-input"
        />
      </div>

      <button class="profile__submit" type="submit">Save</button>
    </form>

    <div class="profile__buttons">
      <button class="profile__action-button">Edit profile</button>
      <button class="profile__action-button">Change password</button>
      <button class="profile__action-button profile__action-button_red">
        Logout
      </button>
    </div>
  </div>
</div>

  `;