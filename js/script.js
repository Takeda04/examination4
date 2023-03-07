const elCard = document.querySelector('.cart__btns');
const elOpenModal = document.querySelector('.cart__open__modal');
const elDelete = document.querySelector('.cart__delete');
const elCloseSpan = document.getElementsByClassName("close")[0];
const elMoreInfo = document.querySelector('box__button2')
const elAdmin = document.querySelector('#admin');
const elSearchBtn = document.querySelector('#search_btn');
const elSearchInput = document.querySelector('#search_input');
const elSearchBook = document.querySelector('.rightPart');


elAdmin.addEventListener('click', ()=>{
  window.location.href = "../pages/admin.html"
})
let token = localStorage.getItem('email');
    if(!token){
        window.location.href = "../pages/login.html";
    }
console.log(elOpenModal);
elOpenModal.addEventListener('click', ()=>{
    modal.style.display = "block"; 
})

elCloseSpan.onclick = function() {
  modal.style.display = "none";
}

elSearchBtn.addEventListener("click", ()=>{
  const url = `https://www.googleapis.com/books/v1/volumes?q=${elSearchInput.value}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      elSearchBook.innerHTML = "";
      data.items.forEach((item) => {
        const card = searchBook(item);
        elSearchBook.appendChild(card);
      });
    });
});

function searchBook(item) {
  const book = document.createElement("div");
  book.classList.add = "rightPart container";
  book.innerHTML = `
  <div class="box">
  <img class="box__img" width="150px" height="180px" src="${item.volumeInfo.imageLinks.thumbnail}" alt="">
  <h4 class="box__title">${item.volumeInfo.title}</h4>
  <p class="box__text">${item.volumeInfo.authors[0]}</p>
  <p class="box__year">${item.volumeInfo.publishedDate}</p>
  <div class="box__btns">
      <div>
          <button class="btn btn-warning box__button1" type="submit">Bookmark</button>
          <button class="btn box__button2" type="submit">More Info</button>
      </div>
      <div class="box__btn">
          <button  class="btn btn-secondary my-1  box__button3" type="submit">Read</button>
      </div>
  </div>
</div>
  `
  

  elRenderBook.append(book);
  if(item.length = 0){
    console.log('yoq')
  }else{
    console.log(item);
  }
  return book;
}
