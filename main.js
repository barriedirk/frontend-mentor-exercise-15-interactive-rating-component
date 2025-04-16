import { $, $$ } from "./utils.js";

(async () => {
  const $sectionStart = $(".rating-state__start");
  const $sectionThankYou = $(".rating-state__thank_you");
  const $btnSubmit = $(".rating-state__submit");
  const $$btnStars = $$(".rating_state__stars button");
  const removeClassSelected = ($$list) =>
    $$list.forEach((item) => item.classList.remove("selected"));
  let startSelected = 0;

  $sectionStart.classList.remove("hidden");
  $sectionThankYou.classList.add("hidden");
  $btnSubmit.disabled = true;

  $$btnStars.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
      evt.preventDefault();

      startSelected = evt.target.getAttribute("data-star");

      removeClassSelected($$btnStars);

      evt.target.classList.add("selected");

      $btnSubmit.disabled = false;
    });
  });

  $btnSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();

    $(".rating-state__stars-selected span:first-child").innerHTML =
      startSelected;

    $sectionStart.classList.add("hidden");
    $sectionThankYou.classList.remove("hidden");
  });
})();
