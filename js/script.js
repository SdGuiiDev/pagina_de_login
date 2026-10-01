// Confirma o carregamento do JavaScript.
console.log("JavaScript conectado!");

// Seleciona os elementos do formulário.
const formularioLogin = document.getElementById("formulario-login");
const campoCpf = document.getElementById("cpf");
const campoSenha = document.getElementById("password");
const botaoEntrar = document.getElementById("entrar");
const mensagemErro = document.getElementById("mensagem-erro");
const botaoAlternarSenha = document.getElementById("alternar-senha");



// Verifica os campos ao enviar o formulário.
function lerCampos(evento) {
    // Impede o envio automático.
    evento.preventDefault();

    // Limpa o erro anterior.
    mensagemErro.textContent = "";

    // Lê o CPF sem espaços nas extremidades.
    const cpf = campoCpf.value.trim();

    // Preserva a senha digitada.
    const senha = campoSenha.value;

    // Verifica se o CPF está vazio.
    if (cpf === "") {
        mensagemErro.textContent = "Preencha o CPF.";
        return;
    }

    // Define o formato: exatamente 11 dígitos.
    const formatoCpf = /^[0-9]{11}$/;

    // Verifica o formato do CPF.
    if (!formatoCpf.test(cpf)) {
        mensagemErro.textContent =
            "Digite o CPF com 11 dígitos, sem pontos ou traços.";
        return;
    }

    // Verifica se a senha está vazia.
    if (senha === "") {
        mensagemErro.textContent = "Preencha a senha.";
        return;
    }

    // Confirma as verificações, sem autenticar.
    console.log("Os dois campos foram preenchidos.");
}

formularioLogin.addEventListener("submit", lerCampos);

//----------------------------------------------------------------------//
// Script de  visibilidade da senha

// Alterna a visibilidade da senha.
function alternarSenha() {
    // Exibe os caracteres.
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        botaoAlternarSenha.setAttribute("aria-label", "Ocultar senha");
    } else {
        // Oculta os caracteres.
        campoSenha.type = "password";
        botaoAlternarSenha.setAttribute("aria-label", "Mostrar senha");
    }
}

// Responde ao clique no ícone.
botaoAlternarSenha.addEventListener("click", alternarSenha);




//----------------------------------------------------------------------//

// Limpa o aviso e restaura a exibição da senha.
function limparFormulario() {
    mensagemErro.textContent = "";
    campoSenha.type = "password";
    botaoAlternarSenha.setAttribute("aria-label", "Mostrar senha");

    // Retorna o cursor ao CPF.
    campoCpf.focus();
}

// Ajusta a interface quando o formulário é limpo.
formularioLogin.addEventListener("reset", limparFormulario);