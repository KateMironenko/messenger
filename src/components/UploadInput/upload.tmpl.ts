export const blockTemplate: string = `
<div class="file-form__input">
      <label for="avatar" class="file-form__input-lable">
      <img src="{{ attachImg }}" /> Select image
        </label>
      <input class="file-form__item form__item_el_file" id="{{inputId}}" name="{{inputName}}" type="file" accept="image/*"  required >
      <span id="file-input-error" class="form__item-error"></span>
        </div> 
  `;
