import { Modal } from "./modal";



export const Teachers = (function () {

    const cardsElement = document.querySelector(".team__cards")

    const cardElementFragmentTemplate = document.querySelector(".team-template").content;
    const cardElementTemplate = cardElementFragmentTemplate.querySelector('.team__card');
    const cardsNode = document.querySelector(".team__cards");

    const fullCardElementFragmenttemplate = document.querySelector(".popup-container-template").content;
    const fullCardElementTemplate = fullCardElementFragmenttemplate.querySelector(".popup-container__wrapper");
    const fullCardNode = document.querySelector(".popup-container");



    function createFullCard(card) {
        // ...

        //console.log(card)

        const newCard = fullCardElementTemplate.cloneNode(true);
        newCard.id = card.id || ""
        const newCardName = newCard.querySelector(".popup-container__name");
        newCardName.textContent = card.name || ""
        const newCardImage = newCard.querySelector(".popup-container__image-wrapper").querySelector(".popup-container__image");
        // console.log(`I am newCadImage ${newCardImage}`)
        newCardImage.src = card.image || ""
        newCardImage.alt = "teacher avatar"

        const newCardInfoWrapper = newCard.querySelector(".popup-container__image-wrapper").querySelector(".popup-container__info-wrapper");
        // console.log(newCardInfoWrapper)
        const newCardAge = newCardInfoWrapper.querySelector("#age");

        newCardAge.textContent = card.age || ""
        const newCardEducation = newCardInfoWrapper.querySelector("#education");
        newCardEducation.textContent = card.education || ""
        const newCardCertificates = newCardInfoWrapper.querySelector("#certificates");
        newCardCertificates.textContent = card.certificates || ""
        const newCardPrice = newCardInfoWrapper.querySelector("#price");
        newCardPrice.textContent = card.price || ""

        const newCardMotto = newCard.querySelector("#motto");
        newCardMotto.textContent = card.motto || ""
        const newCardWorkExperience = newCard.querySelector("#work-experience");
        newCardWorkExperience.textContent = card.experience || ""

        const newCardCategories = newCard.querySelector("#students-categories");
        newCardCategories.textContent = card.categories || ""

        const newCardPrograms = newCard.querySelector("#programs");
        newCardPrograms.textContent = card.programs || ""

        const newCardConditions = newCard.querySelector("#special-conditions");
        newCardConditions.textContent = card.conditions || ""

        const newCardVideo = newCard.querySelector("#video");
        newCardVideo.textContent = card.video || ""

        // add reviews

        const cardsReviewNode = newCard.querySelector(".popup-container__reviews");
        if (card.reviews.length > 0) {
            const reviewsNodes = card.reviews.map((review) => {
                // Находим шаблон и делаем из него HTML-ноду
                const cardReviewNodeFragmentTemplate = newCard.querySelector(".review-template").content;
                const cardReviewNodeTemplate = cardReviewNodeFragmentTemplate.querySelector('.popup-container__review-card')
                const newReviewCardNode = cardReviewNodeTemplate.cloneNode(true);

                // заполняем поля в HTML-ноде
                newReviewCardNode.id = review.id || ""
                const newReviewCardReview = newReviewCardNode.querySelector(".popup-container__text-review");
                newReviewCardReview.textContent = review.review || ""
                const newReviewCardReviewer = newReviewCardNode.querySelector(".popup-container__reviewer");
                newReviewCardReviewer.textContent = review.reviewer || ""

                // Возвращаем нашу HTML-ноду
                return newReviewCardNode
            })


            reviewsNodes.forEach((reviewNode) => {
                cardsReviewNode.appendChild(reviewNode)
            })
        }

        return newCard
    }

    function createCard(card) {
        const newCard = cardElementTemplate.cloneNode(true);

        newCard.id = card.id

        const newCardName = newCard.querySelector(".team__name");
        newCardName.textContent = card.name

        // меняем ссылку и alt 
        const newCardImage = newCard.querySelector(".team__image");
        newCardImage.src = card.image;
        newCardImage.alt = "teacher avatar"

        const newCardAbout = newCard.querySelector(".team__about")
        newCardAbout.textContent = card.motto

        // add image click listener 
        //const moveCards = querySelector(".button-team")
        //moveCards.addEventListener("click", handleMoveCards);
        const popupButton = newCard.querySelector(".button_popup");
        //popupButton.addEventListener("click", openPopupCustom)
        popupButton.addEventListener("click", (event) => {
            // находим popup
            const popup = document.querySelector(".popup")
            const popupContainer = popup.querySelector(".popup-payload")

            // формируем то, что вставим в popup
            const fullHtmlCard = createFullCard(card)

            popupContainer.appendChild(fullHtmlCard)

            // подчищаем пустые поля
            const popupContainerTextAll = popup.querySelectorAll(".popup-container__text");
            const popupContainerReviews = popup.querySelector(".popup-container__reviews");

            if (card.reviews.length == 0) {
                popupContainerReviews.previousSibling.previousSibling.style.display = "none";
            }

            popupContainerTextAll.forEach((textFieldElem) => {
                if (textFieldElem.textContent === "") {
                    textFieldElem.style.display = "none";
                    textFieldElem.previousSibling.previousSibling.style.display = "none";
                }
            })

            // открываем наш сформированный popup
            Modal.openPopup(popup)
        })

        return newCard
    }


    function showReviewCards(cards) {
        const popup = document.querySelector(".popup")
        const reviewCardList = popup.querySelectorAll(".popup-container__review-card");

        reviewCardList.map(card => createFullCard(card))
        cardList.forEach((item) = fullCardNode.appendChild(item))
    }

    function showCards(cards) {
        // delete all element
        const oldElementList = document.querySelectorAll(".team__card");
        oldElementList.forEach(item => item.remove());

        // получаем подготовленные карточки для вставки  в DOM
        const cardList = cards.map(card => createCard(card));

        // add initial cards to elements
        cardList.forEach((item) => cardsNode.appendChild(item));
    }

    function openPopupCustom(event) {
        console.log("am here")
        openPopup(popup)
    }

    return {
        showCards: showCards
    }
}())