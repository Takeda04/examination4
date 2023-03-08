const elCard = document.querySelector(".cart__btns");
const elAdmin = document.querySelector("#admin");
const elSearchBtn = document.querySelector("#search_btn");
const elSearchInput = document.querySelector("#search_input");
const elSearchBook = document.querySelector(".rightPart");

elAdmin.addEventListener("click", () => {
  window.location.href = "../pages/admin.html";
});
let token = localStorage.getItem("email");
if (!token) {
  window.location.href = "../pages/login.html";
}

elSearchBtn.addEventListener("click", () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${elSearchInput.value}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      elSearchBook.innerHTML = "";
      console.log(data);

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
  <div  class="box">
  <img id="box__img" class="box__img" width="150px" height="180px" src="${item.volumeInfo.imageLinks.smallThumbnail}" alt="">
  <h4 class="box__title">${item.volumeInfo.title}</h4>
  <p class="box__text">${item.volumeInfo.authors}</p>
  <p class="box__year">${item.volumeInfo.publishedDate}</p>
  <div class="box__btns">
      <div style="display: flex;">
          <button id = '${item.volumeInfo.title}' name="${item.volumeInfo.authors}" class="btn btn-warning box__button1" type="submit">Bookmark</button>
          <button style="padding: 6.5px 15px; border: none; border-radius:5px" name = "${item.etag}" id="box__button2" class="box__button2" type="submit">More Info</button>
      </div>
      <div class="box__btn">
          <button  class="btn btn-secondary my-1  box__button3" type="submit">Read</button>
      </div>
  </div>
</div>
  `;
  elRenderBook.append(book);

  return book;
}

const _rightPart = document.querySelector(".rightPart");

_rightPart.addEventListener("click", (e) => {
  const Target = _rightPart;
  var target = e.target.id;
  const target2 = e.target.className;

  const elBox = document.querySelector("#box__img");

  if (target == target2) {
    modal.style.display = "block";
    console.log(modal);
    // const modalTitle = document.querySelector("#modal__title");
    // const modalImg = document.querySelector("#modal__img");
    // const modalText = document.querySelector("#modal__text");
    // const modalAuthor = document.querySelector("#modal__author");
    // const modalDate = document.querySelector("#modal__date");
    // const modalActor = document.querySelector("#modal__actor");
    // const modalCategory = document.querySelector("#modal__category");
    // const modalPage = document.querySelector("#modal__page");

    console.log(Target);
  }
});

const containerRight = document.querySelector(".rightPart");
const bookmarkList = document.querySelector(".test2");

const bookmarkArray = [];
var newBookmarkArray;

containerRight.addEventListener("click", (e) => {
  const title = e.target.id;
  const author = e.target.name;

  newBookmarkArray = {
    title,
    author,
  };

  if (!newBookmarkArray.title == "") {
    bookmarkArray.push(newBookmarkArray);
  }

  console.log(bookmarkArray);
  renderBookmark(bookmarkArray);
});

function renderBookmark(arr = bookmarkArray, parent = bookmarkList) {

  parent.textContent = null;
  const fragment = document.createDocumentFragment();
  arr.forEach((item) => {
    const test = document.createElement("div");
    test.classList.add("test");
    test.innerHTML = `

  <div class="container__left__bottom">
    <div class="container__left__bottom__books">
      <div class="bottom__books__left">
        <h4 class=" book__title">${item.title}</h4>
        <p class="book__text">${item.author}</p>
      </div>
        <div class="bottom__books__right">
           <img class="cart__open__modal" id="1" src="./images/book.svg" alt="book">
           <img class="cart__delete" id="2" src="./images/delete.svg" alt="delete btn">
        </div>
    </div>
  </div>
    `;

    fragment.append(test);
  });
  parent.append(fragment);
}
