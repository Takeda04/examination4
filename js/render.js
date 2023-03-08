const elRenderBook = document.querySelector(".rightPart");

async function renderBook() {
  const API = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=all"
  )
    .then((res) => res.json())
    .then((data) =>
      data.items.forEach((item) => {
        createBook(item);
      })
    );
}

renderBook();

function createBook(data) {
  const box = document.createElement("div");
  box.classList.add = "rightPart container box";
  box.innerHTML = `<div class="box">
    <img class="box__img" width="200px" height="280px" src="${data.volumeInfo.imageLinks.smallThumbnail}" alt="">
    <h4 class="box__title">${data.volumeInfo.title}</h4>
    <p class="box__text">${data.volumeInfo.authors}</p>
    <p class="box__year">${data.volumeInfo.publishedDate}</p>
    <div class="box__btns">
        <div>
            <button id = '${data.id}' class="btn btn-warning box__button1" type="submit">Bookmark</button>
            <button style="padding: 6.5px 15px; border: none; border-radius:5px" name = "${data.etag}" id="box__button2" class="box__button2" type="submit">More Info</button>
        </div>
        <div class="box__btn">
            <button  class="btn btn-secondary my-1  box__button3" type="submit">Read</button>
        </div>
    </div>
</div>`;

  elRenderBook.append(box);
}

const __rightPart = document.querySelector(".rightPart");

__rightPart.addEventListener("click", (e) => {
  const target = e.target.id;
  const target2 = e.target.className;

  // console.log(target);
  // console.log(target2);

  if (target == target2) {
    modal.style.display = "block";
  }

  // console.log(target);

  // console.log(target);
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