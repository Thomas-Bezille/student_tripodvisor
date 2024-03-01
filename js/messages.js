const messages = {
  // Insert the content of a message into an element
  addMessageToElement(messageContent, parentElement) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = messageContent;
    errorMessage.classList.add("message");
    parentElement.prepend(errorMessage);
  },
};
