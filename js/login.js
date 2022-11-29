// Модальное окно логина
var loginModal = document.getElementById("loginModal");
var loginBtn = document.getElementById("loginBtn");
var loginClose = document.getElementById("loginClose");

loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

loginClose.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}