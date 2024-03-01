const newsletter = {
  init() {
    const newsletterButton = document.querySelector("#newsletter");
    newsletterButton.addEventListener("click", newsletter.handleOpenNewsletter);

    const closeNewsletterButton = document.querySelector(".newsletter__close");
    closeNewsletterButton.addEventListener(
      "click",
      newsletter.handleCloseNewsletter
    );

    const form = document.querySelector("form");
    form.addEventListener("submit", newsletter.handleSubmitForm);
  },

  handleOpenNewsletter(event) {
    event.preventDefault();
    const newsletter = document.querySelector(".newsletter");
    newsletter.classList.add("newsletter--on");
  },

  handleCloseNewsletter() {
    const newsletter = document.querySelector(".newsletter");
    newsletter.classList.remove("newsletter--on");
  },

  isEmailValid(email) {
    const forbiddenDomains = [
      "@yopmail.com",
      "@yopmail.fr",
      "@yopmail.net",
      "@cool.fr.nf",
      "@jetable.fr.nf",
      "@courriel.fr.nf",
      "@moncourrier.fr.nf",
      "@monemail.fr.nf",
      "@monmail.fr.nf",
      "@hide.biz.st",
      "@mymail.infos.st",
    ];
    for (const domain of forbiddenDomains) {
      if (email.includes(domain)) {
        return false;
      }
    }
    return true;
  },

  handleSubmitForm(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    const newsletterContent = document.querySelector(".newsletter");
    const hasAlreadyAnError = newsletterContent.querySelector(".message");
    const input = document.querySelector(".newsletter__field");
    const inputValue = input.value;
    if (newsletter.isEmailValid(inputValue)) {
      if (hasAlreadyAnError) {
        hasAlreadyAnError.remove();
      }
    } else {
      if (!hasAlreadyAnError) {
        const message = "Les adresses jetables ne sont pas admises";
        const parent = document.querySelector("aside");
        messages.addMessageToElement(message, parent);
      }
    }
    form.reset();
  },
};
