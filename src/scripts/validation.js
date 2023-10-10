
export const Validation = (function () {
    console.log("validation is here")



    const section = document.querySelector(".contact").querySelector(".contact__container")
    //console.log(section);
    const formElement = section.querySelector("form")
    console.log(formElement);

    const nameInput = formElement.querySelector("#name").value
    console.log(nameInput)
    const phoneInput = formElement.querySelector("#phone").value




    function resetFormValidation(formElement) {
        // очищаем инпуты
        formElement.reset();
        // находим кнопку и инпуты      
        const submitButton = formElement.querySelector(".button_contact");
        console.log(`I am submit button ${submitButton}`);
        const inputElementList = formElement.querySelectorAll("input");
        console.log(`I am inputElements ${inputElementList}`);

        //проходим по списку инпутов, для каждого инпута вызываем ф-ю hideError,которая скрывает ошибку
        [...inputElementList].forEach((inputElement) => {
            hideError(formElement, inputElement);
        })
        // деактивируем кнопку
        toggleButtonState(submitButton, false);
    }
    function toggleButtonState(buttonElement, toActive, settings) {

        if (toActive) {
            // Enable button
            buttonElement.disabled = false;
            buttonElement.classList.remove(settings.formSubmitButtonInvalidClass);
        } else {
            // Disable button
            buttonElement.disabled = "disabled";
            buttonElement.classList.add(settings.formSubmitButtonInvalidClass);
        }
    }








    return {

    }


}())

