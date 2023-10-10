const General = (function () {

    console.log("General");

    document.querySelector(".button_header").onclick = function () {
        document.querySelector(".contact").scrollIntoView({ behavior: "smooth" })
    }

    document.querySelector(".button_trial").onclick = function () {
        document.querySelector(".contact").scrollIntoView({ behavior: "smooth" })
    }

    let lastScroll = 0;
    const defaultOffset = 200;
    const header = document.querySelector('.header');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('header_hide');

    window.addEventListener('scroll', () => {
        if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            //scroll down
            header.classList.add('header_hide');
        }
        else if (scrollPosition() < lastScroll && containHide()) {
            //scroll up
            header.classList.remove('header_hide');
        }

        lastScroll = scrollPosition();
    })



    let nameInput = document.querySelector("#name");
    let phoneInput = document.querySelector("#phone");
    const formClientsData = document.querySelector("#form-clients-data");
    const contactSuccess = document.querySelector(".contact__success")

    const submitButton = document.querySelector(".button_contact")
    //submitButton.addEventListener("click", formValidation)
    let hasError = false;
    phoneInput.addEventListener("change", () => {
        submitButton.removeAttribute("disabled");
        submitButton.style.cursor = "none";
    })
    phoneInput.addEventListener("input", () => {
        [nameInput, phoneInput].forEach(item => {
            item.style.border = "1px solid var(--grey-500)";

        });

    })

    function isValidForm(form) {
        const nameInput = form.querySelector("#name");
        const phoneInput = form.querySelector("#phone");
        let isValid = true;
        [nameInput, phoneInput].forEach(item => {
            if (!item.value) {
                isValid = false
            }
        })


        return isValid
    }

    formClientsData.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isValidForm(formClientsData)) {
            // hide error and send request
            [nameInput, phoneInput].forEach(item => {
                item.style.border = "1px solid var(--grey-500)";
                console.log(`Receive form value: ${item.value}`)
                item.value = "";

            });
            // hide Form and show Tick
            formClientsData.style.display = "none";
            contactSuccess.style.display = "flex";

        } else {
            // show error
            [nameInput, phoneInput].forEach(item => {
                if (!item.value) {
                    item.style.border = "7px solid red";
                }
            });
        }
    })

    formClientsData.addEventListener("keyup", (e) => {
        // console.log("keydown")
        if (isValidForm(formClientsData)) {
            //console.log("a")
            submitButton.removeAttribute("disabled");
            submitButton.style.cursor = "auto";
        } else {
            //console.log("b")
            submitButton.setAttribute("disabled", "true");
            submitButton.style.cursor = "not-allowed";
        }
    })

    return {

    }

}())
