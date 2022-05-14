export const blockTemplate : string = `
<div class="auth">
  <div class="auth__left-block">
    <div class="login" id="login">
    <h1 class="auth-form__title">Sign in</h1>
      {{form}}
        <a href='/signup' class="auth-form__link">Create account</a>
      </div>
    </div>
    <div class="auth__right-block"></div>
  </div>
  `;
