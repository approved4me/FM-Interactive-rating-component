const form = document.querySelector(".rating-form");
const reteStart = document.querySelector(".content_rating");
const thankYou = document.querySelector(".content_thanks");

form.addEventListener("submit", function(e) {
  e.preventDefault(); //prevents Browser from refreshing
  reteStart.classList.add("hidden");
  thankYou.classList.remove("hidden");
})