export const blockTemplate = `
<div class="auth">
  <div class="auth__left-block">
    <div class="login" id="login">
      <form name="login_form" novalidate>
        <h1 class="auth-form__title">Sign in</h1>
        <fieldset class="auth-form__input-container">
          <div class="auth-form__input">
            <input class="auth-form__item form__item_el_login" id="login-input" name="login" type="text" placeholder=" " required minlength="2" maxlength="40">
            <label for="login">Login</label>
            <span id="login-input-error" class="form__item-error"></span>
          </div>    
          <div class="auth-form__input">
            <input class="auth-form__item form__item_el_password" id="password-input" name="password" type="password" placeholder=" " required minlength="2" maxlength="200">
            <label for="password">Password</label>
            <span id="password-input-error" class="form__item-error"></span>
          </div>    
        </fieldset>
        <button class="auth-form__btn-submit" type="submit" name="sign-in">Sign in</button>
        <a href='#/signup' class="auth-form__link">Create account</a>
      </div>
    </div>
    <div class="auth__right-block"></div>
  </div>
  `;
