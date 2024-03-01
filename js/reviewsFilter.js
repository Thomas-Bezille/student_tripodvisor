const reviewsFilter = {
  init() {
    const ratingCheckboxes = document.querySelectorAll("input[name='rating']");
    for (const checkbox of ratingCheckboxes) {
      checkbox.addEventListener("click", reviewsFilter.handleFilterRating);
    }

    if (localStorage.getItem("rate3") === "false") {
      ratingCheckboxes[0].checked = false;
      reviewsFilter.toggleReviews(3);
    }
    if (localStorage.getItem("rate3") === "false") {
      ratingCheckboxes[1].checked = false;
      reviewsFilter.toggleReviews(2);
    }
    if (localStorage.getItem("rate3") === "false") {
      ratingCheckboxes[2].checked = false;
      reviewsFilter.toggleReviews(1);
    }
  },

  handleFilterRating(event) {
    const rating = event.currentTarget.value;
    const key = `rate${rating}`;
    const isChecked = event.currentTarget.checked;
    localStorage.setItem(key, isChecked);
    reviewsFilter.toggleReviews(rating);
  },

  toggleReviews(rating) {
    const articles = document.querySelectorAll(`[data-rating='${rating}']`);
    for (const article of articles) {
      article.classList.toggle("review--hidden");
    }
    document.querySelectorAll(`[data-rating='${rating}']`);
  },
};
