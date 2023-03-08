const elAddmin = document.querySelector('#admin');
const elBack = document.querySelector('#back');
const elSubmit = document.querySelector('#submit-btn')
const elTItle = document.querySelector('#title');
const elFile = document.querySelector('#image')
const elAuthor = document.querySelector('#author')
const elSelect = document.querySelector('#select')

elBack.addEventListener('click', ()=>{
    window.location.href = "../index.html"
})

elSubmit.addEventListener('click', (e)=>{
    e.preventDefault();


const url = 'https://6400834263e89b0913b0b244.mockapi.io/users';

const title = elTItle.value;
const image = elFile.value;
const author = elAuthor.value;
const select = elSelect.value;
const data = {
  name: title,
  image: image,
  author: author,
  fileType: select
};

console.log(title);

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    alert('Success:', data);
  })
  .catch(error => {
    alert('Error:', error);
  });

   
})

// const elGet = document.querySelector('#get_btn')

// elGet.addEventListener('click', (e) =>{
//     e.preventDefault();
//     const url2 = 'https://6400834263e89b0913b0b244.mockapi.io/users';

// fetch(url2)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// })
