var searchlink = document.querySelector(".button-search")

var searchpopup = document.querySelector(".modal")

searchlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchpopup.classList.toggle("modal-show");
})
