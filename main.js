let inputEmail = document.getElementById("email");
let buttonId = document.getElementById("button");
let error = document.getElementById("error"); // Asumiendo que tienes un elemento con el id "error" para mostrar el mensaje

const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

buttonId.addEventListener("click", () => {
    const correo = inputEmail.value; 


    if (expresionCorreo.test(correo)) {
        inputEmail.style.border = "1px solid hsl(223, 87%, 63%)"; 
        error.style.visibility = "hidden"; 
        inputEmail.value = "";
    } else {
        inputEmail.style.border = "1px solid red"; 
        error.style.visibility = "visible"; 
    }
});

