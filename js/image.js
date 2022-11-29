// Модальное окно логина
var imgModal = document.getElementById("imgModal");
var imgBtn = document.getElementById("imgBtn");
var imgClose = document.getElementById("imgClose");

imgBtn.onclick = function() {
  imgModal.style.display = "block";
}

imgClose.onclick = function() {
  imgModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == imgModal) {
    imgModal.style.display = "none";
  }
}