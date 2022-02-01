export const blockTemplate = `
<div class="auth">
    <div class="auth__left-block">
<div class="signup" id="signup">
    <form name="signup_form" novalidate>
    <h1 class="auth-form__title">Create account</h1>
    <fieldset class="auth-form__input-container">
    <div class="auth-form__input">
        <input class="auth-form__item form__item_el_email" id="email-input" name="email" type="text" placeholder=" " required minlength="2" maxlength="40">
        <label for="email">E-mail</label>
        <span id="email-input-error" class="form__item-error"></span>
    </div> 
    <div class="auth-form__input">
        <input class="auth-form__item form__item_el_login" id="login-input" name="login" type="text" placeholder=" " required minlength="2" maxlength="40">
        <label for="login">Login</label>
        <span id="login-input-error" class="form__item-error"></span>
    </div> 
    <div class="auth-form__input">
        <input class="auth-form__item form__item_el_name" id="name-input" name="first_name" type="text" placeholder=" " required minlength="2" maxlength="40">
        <label for="name">Name</label>
        <span id="name-input-error" class="form__item-error"></span>
    </div> 
    <div class="auth-form__input">
        <input class="auth-form__item form__item_el_surname" id="surname-input" name="second_name" type="text" placeholder=" " required minlength="2" maxlength="40">
        <label for="surname">Surname</label>
        <span id="surname-input-error" class="form__item-error"></span>
    </div>  
    <div class="auth-form__input">
        <input class="auth-form__item form__item_el_phone" id="phone-input" name="phone" type="text" placeholder=" " required minlength="2" maxlength="40">
        <label for="phone">Phone number</label>
        <span id="phone-input-error" class="form__item-error"></span>
    </div>   
    <div class="auth-form__input">
        <input class="auth-form__item form__item_el_password" id="password-input" name="password" type="password" placeholder=" " required minlength="2" maxlength="200">
        <label for="password">Password</label>
        <span id="password-input-error" class="form__item-error"></span>
    </div>    
    <div class="auth-form__input">
        <input class="auth-form__item form__item_el_second_password" id="second-password-input" name="second_password" type="password" placeholder=" " required minlength="2" maxlength="200">
        <label for="second_password">Confirm password</label>
        <span id="second=password-input-error" class="form__item-error"></span>
    </div>
    </fieldset>
    <button class="auth-form__btn-submit" type="submit" name="sign-up">Sign up</button>
    <a href="/" class="auth-form__link">Sign in</a>
  </div>
  </div>
    <div class="auth__right-block"></div>
  </div>
  `;
