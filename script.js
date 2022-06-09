const overlay = document.getElementById("overlay")
const abrirMenu = document.getElementById("menu-btn-abrir")
const fecharMenu = document.getElementById("menu-btn-fechar")
const navbar = document.getElementById("nav")
abrirMenu.addEventListener("click", abreMenu)
fecharMenu.addEventListener("click", fechaMenu)



function abreMenu() {
    overlay.style.display = "block";
    navbar.style.display = "flex";
    } 

function fechaMenu() {
    overlay.style.display = "none";
    navbar.style.display = "none";
}

window.addEventListener('resize', function(event){
    if (window.screen.width >= 600) {
    overlay.style.display = "block";
    navbar.style.display = "flex";
} 
});


const inputs = document.querySelectorAll('[data-form="input"]');
const msgEnviada = document.getElementById("contato-submitted-msg");

for (input of inputs) {
    input.addEventListener("invalid", (e) => {
        e.preventDefault()
        valida(e.target)
    })
    input.addEventListener("blur", (e) => {
        valida(e.target)
    })
}

function valida (input) {
    const errorField = document.querySelector(`[data-tipo="${input.id}-error"]`)

    if (input.validity.valid){
        input.classList.remove("contato-input-error");
        errorField.innerHTML = "";
    } else {
        input.classList.add("contato-input-error");
        if (input.validity.valueMissing) {
            errorField.innerHTML = `O campo ${input.id} não pode estar vazio.`
        }
        else if (input.validity.tooLong){
            errorField.innerHTML = `O campo ${input.id} deve ter no máximo 50 caracteres.`
        }
        else if (input.validity.typeMismatch) {
            errorField.innerHTML = `Verifique o email digitado. Exemplo: email@exemplo.com`
        }
    }
}


const form = document.getElementById('contato-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let input of inputs) {
        valida(input)
    }
    form.style.display = "none";
    msgEnviada.style.display = "flex";
});
