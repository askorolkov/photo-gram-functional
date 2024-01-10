export function formValidator(validationConfig, form) {  
  
  const inputs = Array.from(form.querySelectorAll('.popup__input'));

  const submitButton = form.querySelector(validationConfig.submitButton);
  function addEventListeners() {
    inputs.forEach((input)=> input.addEventListener('input', ()=> checkInputValidity(input))); 
  }

  function checkInputValidity(input) {
    if (!input.validity.valid) {
      console.log('not valid');
      disableSubmitButton();      
    } else {
      enableSubmitButton();
    }
  }

  function disableSubmitButton() {
    submitButton.setAttribute('disabled', true);
  }

  function enableSubmitButton() {
    submitButton.removeAttribute('disabled', true);
  }

  function toggleButtonState() {
    if (inputs.some((input)=> !input.validity.valid)) {
      disableSubmitButton()
    } else {
      enableSubmitButton()
    }
  }

  addEventListeners();
  toggleButtonState();
}