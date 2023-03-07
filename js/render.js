const elRenderBook = document.querySelector('.rightPart');
async function renderBook(){
    const API = await fetch("https://www.googleapis.com/books/v1/volumes?q=all")
    .then((res) => res.json())
    .then((data) =>
      data.items.forEach((item) => {
        console.log(createBook(item));
      })
    );
}

renderBook();

function createBook(data){
  
    const box = document.createElement("div");
    box.classList.add = 'rightPart container';
    box.innerHTML = `<div class="box">
    <img class="box__img" width="150px" height="180px" src="${data.volumeInfo.imageLinks.thumbnail}" alt="">
    <h4 class="box__title">${data.volumeInfo.title}</h4>
    <p class="box__text">${data.volumeInfo.authors[0]}</p>
    <p class="box__year">${data.volumeInfo.publishedDate}</p>
    <div class="box__btns">
        <div>
            <button class="btn btn-warning box__button1" type="submit">Bookmark</button>
            <button class="btn box__button2" type="submit">More Info</button>
        </div>
        <div class="box__btn">
            <button  class="btn btn-secondary my-1  box__button3" type="submit">Read</button>
        </div>
    </div>
</div>`

    elRenderBook.append(box)
}