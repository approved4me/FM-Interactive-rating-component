let ratingNrs = document.getElementsByClassName("rating-li");

for (let i = 0; i < ratingNrs.length; i++) {
    let ratingNr = ratingNrs[i];
    ratingNr.onclick = function() {
      ratingNr.classList.toggle("active");
      console.log(ratingNr.textContent);
    }
  }