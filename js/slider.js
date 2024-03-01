const slider = {
  newCurrentImage: 0,

  init() {
    const previousBtn = document.querySelector(".previous__btn");
    const nextBtn = document.querySelector(".next__btn");

    previousBtn.addEventListener("click", slider.previousImg);
    nextBtn.addEventListener("click", slider.nextImg);

    slider.generateSliderImage();
    setInterval(slider.nextImg, 4000);
  },

  generateSliderImage() {
    const sliderImages = [
      "ocean.jpg",
      "ski.jpg",
      "city.jpg",
      "canyon.jpg",
      "road.jpg",
      "nature.jpg",
    ];

    const sliderContainer = document.querySelector(".slider");
    for (const currentImage of sliderImages) {
      const newSliderImage = document.createElement("img");
      newSliderImage.src = `img/${currentImage}`;
      newSliderImage.classList.add("slider__img");
      newSliderImage.alt = "Paysage";
      sliderContainer.append(newSliderImage);
    }
    const firstImage = document.querySelector(".slider__img");
    firstImage.classList.add("slider__img--current");
  },

  nextImg() {
    const images = document.querySelectorAll(".slider__img");
    images[slider.newCurrentImage].classList.remove("slider__img--current");
    slider.newCurrentImage = (slider.newCurrentImage + 1) % images.length;
    images[slider.newCurrentImage].classList.add("slider__img--current");
  },

  previousImg() {
    const images = document.querySelectorAll(".slider__img");
    images[slider.newCurrentImage].classList.remove("slider__img--current");
    slider.newCurrentImage =
      (slider.newCurrentImage - 1 + images.length) % images.length;
    images[slider.newCurrentImage].classList.add("slider__img--current");
  },
};
