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



let yourName = document.querySelector("#name");
let phone = document.querySelector("#phone");
console.log(yourName);
console.log(phone)

const submitButton = document.querySelector(".button_contact")
//submitButton.addEventListener("click", formValidation)

submitButton.onclick = function (e) {
    e.preventDefault();
    let hasError = false;
    [yourName, phone].forEach(item => {
        if (!item.value) {
            item.style.border = "7px solid red";
            hasError = true;
        } else {
            item.style.border = "1px solid var(--grey-500)";
        }
    });

    if (!hasError) {
        [yourName, phone].forEach(item => {
            item.value = "";

        })
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!")
    }
}


/*const formValidation = ((e) => {
    e.preventDefault();
    let hasError = false;
    [yourName, phone].forEach(item => {
        if (!item.value) {
            item.style.border = "7px solid red";
            hasError = true;
        } else {
            item.style.border = "1px solid var(--grey-500)";
        }
    });

    if (!hasError) {
        [yourName, phone].forEach(item => {
            item.value = "";

        })

        alert("Спасибо! Ждите звонка!")
    }

    

})
*/


