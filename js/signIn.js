//Clase usuario
class User{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}

//Array que guarda los usuarios
const users = JSON.parse(localStorage.getItem('usuario')) || [];

//Usuarios
const guillermo = new User("guille86","fernandez_guillermo@outlook.com","167524893");
const florencia = new User("flor_98","m.floreciaperez@hotmail.com","morcilla");

//pusheo usuarios al array
users.push(guillermo);
users.push(florencia);


//Guardo en el storage los usuarios ya cargados
localStorage.setItem("Usuario",JSON.stringify(users));

//Tomamos el formulario creado en htmal
const idFormulario = document.getElementById("formulario");

//Registramos un nuevo usuario
idFormulario.addEventListener("submit",(e)=>{ 
    e.preventDefault(); //Evitamos que se recargue la pagina

    const user = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //verifico el usuario si esta ingresado cambio el estilo de bootstrap
    if(verificarUsuario(user)) invalidarUsuario();
    
    //verifico el email si esta ingresado cambio el estilo de bootstrap
    if(verificarMail(email)) invalidarEmail();

    //si usuario y mail no estan registrados registro el usuario
    if(!verificarUsuario(user) && !verificarMail(email)) registrarUsuario(user,email,password);
    
    //Limpiamos el formulario
    idFormulario.reset();    
})

const userFormulario = document.getElementById("user");

//Funcion que verifica el usuario
function verificarUsuario(userName){
    let user = localStorage.getItem("Usuario",JSON.stringify(users));
    user = users.find(user => user.userName === userName);
    if(user != undefined) return true;
}

//Funcion que verifica el mail
function verificarMail(userEmail){
    let email = localStorage.getItem("Usuario",JSON.stringify(users));
    email = users.find(user => user.email === userEmail);
    if(email != undefined) return true;
}

//Funcion que me cambia el estilo del input del formulario con bootstrap
function invalidarUsuario(){ 
    const userFormulario = document.getElementById("user");
    userFormulario.className = "form-control is-invalid";
    userFormulario.id = "floatingInputGroup2";
    let mensajeUser = document.getElementById("mensajeUser");
    mensajeUser.className = "invalid-feedback"
    mensajeUser.innerText = "Este usuario ya esta registrado"; 
    userFormulario.id = "user";
}

//Funcion que me cambia el estilo del input del formulario con bootstrap
function invalidarEmail(){ 
    const emailFormulario = document.getElementById("email");
    emailFormulario.className = "form-control is-invalid";
    emailFormulario.id = "floatingInputGroup2";
    let mensajeEmail = document.getElementById("mensajeEmail");
    mensajeEmail.className = "invalid-feedback"
    mensajeEmail.innerText = "Este mail ya ha sido registrado";
    emailFormulario.id = "email";
    alertWrong();
}


//Funcion que registra el usuario
function registrarUsuario(user,email,password){
    //Creamos el objeto usuario
    const usuario = new User(user,email,password);

    //Agregamos el usuario al array
    users.push(usuario);

    //Guardo los datos en el storage
    localStorage.setItem("Usuario",JSON.stringify(users));

    alertOk();
}

//Funcion que limpia el formulario
let btnLimpiarForm = document.getElementById ("btnLimpiarForm");
btnLimpiarForm.onclick = () => {
    const userFormulario = document.getElementById("user");
    userFormulario.className = "form-control";    
    const emailFormulario = document.getElementById("email");
    emailFormulario.className = "form-control";
};

//Funcion alert de registro exitoso
function alertOk(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Te has registrado correctamente',
        showConfirmButton: false,
        timer: 2000
        })
}

//Funcion alert de registro invalido
function alertWrong(){
    Swal.fire({
        icon: 'error',
        title: 'No se puede registrar',
        text: 'Cambie el usuario o el mail de registro',
    })
}