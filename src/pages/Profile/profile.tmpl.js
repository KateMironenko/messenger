export const blockTemplate = `
<div class="profile" id="profile">
  <a href="#/chat" class="profile__back-link">
    <img class="profile__back-img" src="{{ backImg }}" />
  </a>

  <div class="profile__container">
    <button class="profile__avatar">
      <img class="profile__avatar-icon" src="{{ pictuteImg }}" />
      <img class="profile__avatar-icon_edit" src="{{ pictuteEditImg }}" />
    </button>

    <h1 class="profile__name">{{ name }}</h1>

    <form name="edit-profile" class="profile__list profile__info-form">
      <div class="profile__item">
        <h2 for="email" class="profile__item-name">Email</h2>
        <input name="email" readonly value="{{ email }}" class="profile__item-input" />
        <span id="email-input-error" class="form__item-error"></span>
      </div>

      <div class="profile__item">
        <h2 class="profile__item-name">Login</h2>
        <input name="login" readonly value="{{ login }}" class="profile__item-input"/>
        <span id="login-input-error" class="form__item-error"></span>
      </div>

      <div class="profile__item">
        <h2 class="profile__item-name">Name</h2>
        <input name="first_name" readonly value="{{ firstName }}" class="profile__item-input profile__item-input_capitalize" />
        <span id="first_name-input-error" class="form__item-error"></span>
      </div>

      <div class="profile__item">
        <h2 class="profile__item-name">Surname</h2>
        <input name="second_name" readonly value="{{ secondName }}" class="profile__item-input profile__item-input_capitalize" />
        <span id="second_name-input-error" class="form__item-error"></span>
      </div>

      <div class="profile__item">
        <h2 class="profile__item-name">Name in chat</h2>
        <input name="display_name" readonly value="{{ displayName }}" class="profile__item-input" />
        <span id="display_name-input-error" class="form__item-error"></span>
      </div>

      <div class="profile__item">
        <h2 class="profile__item-name">Telephone</h2>
        <input name="phone" readonly value="{{ phone }}" class="profile__item-input" />
        <span id="phone-input-error" class="form__item-error"></span>
      </div>

      <button class="profile__submit" type="submit">Save</button>
    </form>

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
