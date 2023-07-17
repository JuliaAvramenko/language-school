//import { Modal } from "./modal";

const teachers = [
    'petrov',
    'ivanova',
    'persikov',
    'podrugova',
]

const cardsElement = document.querySelector(".team__cards")
//console.log(cardsElement)

const cardElementFragmentTemplate = document.querySelector(".team-template").content;
const cardElementTemplate = cardElementFragmentTemplate.querySelector('.team__card');
const cardsNode = document.querySelector(".team__cards");

const fullCardElementFragmenttemplate = document.querySelector(".popup-container-template").content;
const fullCardElementTemplate = fullCardElementFragmenttemplate.querySelector(".popup-container__wrapper");
const fullCardNode = document.querySelector(".popup-container");

console.log(fullCardElementFragmenttemplate)
console.log(fullCardElementTemplate)
console.log(fullCardNode)

const getTeacher = async (profileName) => {

    try {
        const response = await fetch(`data/teachers/${profileName}.json`);
        return await response.json();
    } catch (err) {
        //console.log('error: ' + err);
    }
}


function createFullCard(card) {
    // ...
    const newCard = fullCardElementTemplate.cloneNode(true);
    newCard.id = card.id;
    const newCardName = newCard.querySelector(".popup-container__name");
    newCardName.textContent = card.name;
    const newCardImage = newCard.querySelector(".popup-container__image-wrapper").querySelector(".popup-container__image");
    console.log(`I am newCadImage ${newCardImage}`)
    newCardImage.src = card.image;
    newCardImage.alt = "teacher avatar"
    const newCardInfoWrapper = newCard.querySelector(".popup-container__image-wrapper").querySelector(".popup-container__info-wrapper");
    const newCardAge = newCardInfoWrapper.querySelector("age");
    newCardAge.textContent = card.age;
    const newCardEducation = newCardInfoWrapper.querySelector("education");
    newCardEducation.textContent = card.education;
    const newCardCertificates = newCardInfoWrapper.querySelector("certificates");
    newCardCertificates.textContent = card.certificates;
    const newCardPrice = newCardInfoWrapper.querySelector("price");
    newCardPrice.textContent = card.price;

    const newCardMotto = newCard.querySelector("motto");
    newCardMotto.textContent = card.motto
    const newCardWorkExperience = newCard.querySelector("work-experience");
    newCardWorkExperience.textContent = card.experience

    const newCardCategories = newCard.querySelector("students-categories");
    newCardCategories.textContent = card.categories

    const newCardPrograms = newCard.querySelector("programs");
    newCardPrograms.textContent = card.programs

    const newCardConditions = newCard.querySelector("special-conditions");
    newCardConditions.textContent = card.conditions

    const newCardVideo = newCard.querySelector("video");
    newCardVideo.textContent = card.video




}


function createCard(card) {
    // клонируем шаблон
    console.log(card)
    //console.log(cardElementTemplate)
    const newCard = cardElementTemplate.cloneNode(true);
    //console.log(newCard)

    newCard.id = card.id
    // меняем имя на переменную
    //console.log(card.id)
    //console.log(newCard)

    const newCardName = newCard.querySelector(".team__name");
    // console.log(newCardName)
    newCardName.textContent = card.name
    //console.log(card.name)

    // меняем ссылку и alt 
    const newCardImage = newCard.querySelector(".team__image");
    // console.log(newCardImage)
    newCardImage.src = card.image;
    newCardImage.alt = "teacher avatar"
    //console.log(card.image)

    const newCardAbout = newCard.querySelector(".team__about")
    //console.log(newCardAbout)
    newCardAbout.textContent = card.motto
    //console.log(card.about)
    // add image click listener 
    //const moveCards = querySelector(".button-team")
    //moveCards.addEventListener("click", handleMoveCards);
    const popupButton = newCard.querySelector(".button_popup");
    console.log(`I am popupbutton ${popupButton}`)
    popupButton.addEventListener("click", openPopupCustom)
    popupButton.addEventListener("click", (event) => {
        /**
         * 1. find opened popup
         * 2. add full card to opened popup
         */
        //addCloseHandlers(popup)
    })

    return newCard
}

function showReviewCards(cards) {
    const oldElementList = document.querySelectorAll(".popup-container__review-card");
    oldElementList.forEach(item => item.remove());
    const cardList = cards.map(card => createFullCard(card))
    cardList.forEach((item) = fullCardNode.appendChild(item))
}

function showCards(cards) {/**
     * 
     */
    //console.log(cards)
    // delete all element
    const oldElementList = document.querySelectorAll(".team__card");
    oldElementList.forEach(item => item.remove());
    //получаем подготовленные карточки для вставки  в DOM
    const cardList = cards.map(card => createCard(card));
    //console.log(cardList)
    // add initial cards to elements


    cardList.forEach((item) => cardsNode.appendChild(item));
}

//getTeacher("petrov");
//getTeacher("ivanova");
//Modal.test()
const teachersData = teachers.map((item) => {
    return getTeacher(item)
})
Promise.all(teachersData).then(teachersData => {
    showCards(teachersData)
})


//const leftTeachersButton = document.querySelector(".left-teachers-button").disabled = true;
//console.log(`I am a button ${leftTeachersButton}`)









const popup = document.querySelector(".popup")

function openPopupCustom(event) {
    console.log("am here")
    openPopup(popup)
}

function openPopup(popupElem) {
    addCloseHandlers(popupElem);
    popup.classList.add("popup_opened")
}

function closePopup(popupElem) {
    console.log(`i am popupElem eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ${popupElem}`)
    removeCloseHandlers(popupElem);
    popup.classList.remove("popup_opened")
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
        console.log(`I am event ${e}`)
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

