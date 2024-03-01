const newsletterElement = {
  init() {
    const newsletterButton = document.querySelector("#newsletter");
    newsletterButton.addEventListener(
      "click",
      newsletterElement.handleOpenNewsletter
    );

    const closeNewsletterButton = document.querySelector(".newsletter__close");
    closeNewsletterButton.addEventListener(
      "click",
      newsletterElement.handleCloseNewsletter
    );
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
};
