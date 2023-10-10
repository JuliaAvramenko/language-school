const Script = (function () {


    console.log("hi, babe");

    const button = document.querySelector(".button_icons");
    const wrapper = document.querySelector(".icons__wrapper");

    button.onclick = function () {

        if (wrapper) {
            if (wrapper.style.display === "none") {
                wrapper.style.display = "flex"
            } else {
                wrapper.style.display = "none"

            }
        }
    }

    return {

    }
}())
