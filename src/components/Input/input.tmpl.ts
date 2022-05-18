export const blockTemplate: string = `
<div class="{{inputContainerClass}}">
            <input {{inputDisabled}} value="{{value}}" class="{{inputClass}} {{inputInvalidClass}}" id="{{inputId}}" name="{{inputName}}" type="{{inputType}}" placeholder="{{inputPlaceholder}}">
            <label for="{{inputName}}">{{inputLabel}}</label>
            <span id="{{inputName}}-input-error" class="form__item-error"></span>
</div> 
  `;
