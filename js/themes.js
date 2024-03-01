const themes = {
  body: document.querySelector("body"),

  init() {
    const logo = document.querySelector(".logo__image");
    const btnTheme = document.querySelector("#theme-switch");
    const btnThemeSecondary = document.querySelectorAll(".theme-button");
    const isDarkModOn = localStorage.getItem("darkMod");
    const colorTheme = localStorage.getItem("colorTheme");

    btnTheme.addEventListener("click", themes.handleTogglePrimaryTheme);

    for (const btn of btnThemeSecondary) {
      btn.addEventListener("click", themes.handleToggleSecondaryTheme);
    }

    if (isDarkModOn === "true") {
      themes.body.classList.add("theme-dark");
    }

    switch (colorTheme) {
      case "theme-red":
        themes.body.classList.add("theme-red");
        break;
      case "theme-green":
        themes.body.classList.add("theme-green");
        break;
      case "theme-blue":
        themes.body.classList.add("theme-blue");
        break;
    }

    logo.src = `img/logo-${colorTheme}.png`;
  },

  handleTogglePrimaryTheme() {
    themes.body.classList.toggle("theme-dark");
    if (themes.body.classList.contains("theme-dark")) {
      localStorage.setItem("darkMod", "true");
    } else {
      localStorage.setItem("darkMod", "false");
    }
  },

  handleToggleSecondaryTheme(event) {
    const logo = document.querySelector(".logo__image");
    themes.body.classList.remove("theme-red", "theme-green", "theme-blue");

    themes.body.classList.add(event.currentTarget.id);
    localStorage.setItem("colorTheme", event.currentTarget.id);
    logo.src = `img/logo-${event.currentTarget.id}.png`;
  },
};
