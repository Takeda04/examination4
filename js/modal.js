const elOpenModal = document.querySelector(".cart__open__modal");
const elDelete = document.querySelector(".cart__delete");
const elCloseSpan = document.getElementsByClassName("close")[0];


elOpenModal.addEventListener("click", () => {
    modal.style.display = "block";
  });
  
  elCloseSpan.onclick = function () {
    modal.style.display = "none";
};