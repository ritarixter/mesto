function errorResearch(input) {
  const inputName = input.getAttribute("name");
  const errorPlace = document.getElementById(inputName + "-error");
  return errorPlace;
}

function errorHide(error, errorClass, input, inputErrorClass) {
  error.textContent = "";
  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

function errorShow(error, errorClass, input, inputErrorClass) {
  error.textContent = input.validationMessage;
  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

function enableButtonIsFormValid(inputs,submitButtonSelector,form,inactiveButtonClass) {
  const button = form.querySelector(submitButtonSelector);
  const formIsValid = inputs.every((input) => input.validity.valid);
  if (formIsValid) {
    button.removeAttribute("disabled");
    button.classList.remove(inactiveButtonClass);
  } else {
    button.setAttribute("disabled", "disabled");
    button.classList.add(inactiveButtonClass);
  }
}

function inputIsValid(input, errorClass, inputErrorClass) {
  if (input.validity.valid) {
    errorHide(errorResearch(input), errorClass, input, inputErrorClass);
  } else {
    errorShow(errorResearch(input), errorClass, input, inputErrorClass);
  }
}

export default function enableValidation(variablesValidation) {
  const forms = Array.from(
    document.querySelectorAll(variablesValidation.formSelector)
  );
  forms.forEach((form) => {
    const inputs = Array.from(
      form.querySelectorAll(variablesValidation.inputSelector)
    );
    inputs.forEach((input) => {
      input.addEventListener("input", function (evt) {
        inputIsValid(input,variablesValidation.errorClass,variablesValidation.inputErrorClass);
        enableButtonIsFormValid(inputs,variablesValidation.submitButtonSelector, form,variablesValidation.inactiveButtonClass);
      });
    });

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      //Такое решение под вопросом, функция enableButtonIsFormValid() не срабатывает, потому что при 'submit' поля еще валидны?
      const button = form.querySelector(
        variablesValidation.submitButtonSelector
      );
      button.setAttribute("disabled", "disabled");
      button.classList.add(variablesValidation.inactiveButtonClass);
    });
  });
}

