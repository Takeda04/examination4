const elEmail = document.querySelector('#typeEmailX');
const elPassword = document.querySelector('#typePasswordX')
const elSignOut = document.querySelector('#signOut')

function signIn(){
    const auth = firebase.auth();
	auth.signInWithEmailAndPassword(elEmail.value, elPassword.value)
		.then(() => {
			window.location.href = '../index.html';
			localStorage.setItem('email', elEmail.value);
		})
		.catch(error => alert(error.message));
}


function signUp() {
	const auth = firebase.auth();
	auth.createUserWithEmailAndPassword(elEmail.value, elPassword.value)
		.then(() => {
			window.location.href = '../index.html';
			localStorage.setItem('email', elEmail.value);
		})
		.catch(error => alert(error.message));
}
function signOut() {
	localStorage.removeItem('email');
	firebase.auth().signOut();
    let token = localStorage.getItem('email');
    if(token){
        window.location.href = "../index.html";
    }else{
        window.location.href = "../pages/login.html";
    }
}