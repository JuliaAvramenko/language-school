import { selectors } from "./config";




export const Modal = (function () {
    function test() {
        console.log("Modal")
    }




    function openPopup(popupElem) {
        addCloseHandlers(popupElem);
        popupElem.classList.add("popup_opened")
    }

    function closePopup(popupElem) {
        // console.log(`i am popupElem eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ${popupElem}`)
        removeCloseHandlers(popupElem);
        popupElem.classList.remove("popup_opened")
        const popupPayload = popupElem.querySelector(".popup-payload")
        popupPayload.innerHTML = ""
    }
    function addCloseHandlers(popupElem) {
        // add Esc handler
        document.addEventListener("keydown", closeByEscape);
        // add cross handler
        const popupCloseButton = popupElem.querySelector(".popup-container__close-button");
        popupCloseButton.addEventListener("click", closeByCross)
        // add overlay handler
        popupElem.addEventListener("mousedown", closeByOverlay)
    }

    function removeCloseHandlers(popupElem) {
        // remove Esc handler
        document.removeEventListener("keydown", closeByEscape);
        // remove  cross handler
        const popupCloseButton = popupElem.querySelector(".popup-container__close-button");
        popupCloseButton.removeEventListener("click", closeByCross);
        //remove overlay handler
        popupElem.removeEventListener("mousedown", closeByOverlay);
    }




    function closeByCross(e) {
        const popupElem = e.target.closest(".popup_opened")
        closePopup(popupElem)
    }

    function closeByEscape(e) {
        if (e.key === "Escape") {
            // console.log(`I am event ${e}`)
            const popupOpened = document.querySelector(".popup_opened")
            closePopup(popupOpened)
        }

    }

    function closeByOverlay(e) {
        // Обрабатываем клик за пределами попапа: 
        // Source: https://misha.agency/javascript/klik-vne-elementa.html
        const popupElement = e.target.closest(".popup_opened");
        const popupContainer = popupElement.querySelector(".popup-container");
        const withinBoundaries = e.composedPath().includes(popupContainer);
        if (!withinBoundaries) {
            closePopup(popupElement);
        }
    }


    return {
        openPopup: openPopup
    }
}());


