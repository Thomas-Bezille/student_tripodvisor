const destinations = {
  init() {
    const likesArray = document.querySelectorAll(".btn__like");
    for (const like of likesArray) {
      like.addEventListener("click", destinations.handleClickOnLike);
    }
  },

  handleClickOnLike(event) {
    const message = "Vous devez vous connecter pour ajouter à vos favoris";
    const cardElement = event.target.closest(".card");
    const hasAlreadyAnError = cardElement.querySelector(".message");
    if (hasAlreadyAnError) {
      hasAlreadyAnError.remove();
    } else {
      messages.addMessageToElement(message, cardElement);
    }
  },
};
