// Confirma o carregamento do JavaScript.
console.log("JavaScript conectado!");


//----------------------------------------------------------------------//
// Seleciona os elementos do formulário.

const formularioLogin = document.getElementById("formulario-login");
const campoCpf = document.getElementById("cpf");
const campoSenha = document.getElementById("password");
const botaoEntrar = document.getElementById("entrar");
const mensagemErro = document.getElementById("mensagem-erro");
const botaoAlternarSenha = document.getElementById("alternar-senha");


//----------------------------------------------------------------------//
// Validação do formulário.

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

    // Mostra o erro junto ao CPF.
    if (cpf === "") {

        campoCpf.setCustomValidity("Preencha o CPF.");
        campoCpf.reportValidity();

        return;
    }

    // Define o formato: exatamente 11 dígitos.
    const formatoCpf = /^[0-9]{11}$/;

    // Mostra o erro de formato junto ao CPF.
    if (!formatoCpf.test(cpf)) {

        campoCpf.setCustomValidity(
            "Digite o CPF com 11 dígitos, sem pontos ou traços."
        );

        campoCpf.reportValidity();

        return;
    }

    // Mostra o erro junto à senha.
    if (senha === "") {

        campoSenha.setCustomValidity("Preencha a senha.");
        campoSenha.reportValidity();

        return;
    }

    // Confirma as verificações, sem autenticar.
    console.log("Os dois campos foram preenchidos.");
}


// Executa a validação quando o formulário é enviado.
formularioLogin.addEventListener("submit", lerCampos);


//----------------------------------------------------------------------//
// Script de visibilidade da senha.

// Alterna a visibilidade da senha.
function alternarSenha() {

    // Exibe os caracteres.
    if (campoSenha.type === "password") {

        campoSenha.type = "text";

        botaoAlternarSenha.setAttribute(
            "aria-label",
            "Ocultar senha"
        );

    } else {

        // Oculta os caracteres.
        campoSenha.type = "password";

        botaoAlternarSenha.setAttribute(
            "aria-label",
            "Mostrar senha"
        );
    }
}


// Responde ao clique no ícone.
botaoAlternarSenha.addEventListener(
    "click",
    alternarSenha
);


//----------------------------------------------------------------------//
// Limpeza do formulário.

// Limpa o aviso e restaura a exibição da senha.
function limparFormulario() {

    mensagemErro.textContent = "";

    campoSenha.type = "password";

    botaoAlternarSenha.setAttribute(
        "aria-label",
        "Mostrar senha"
    );

    // Remove o erro personalizado do CPF.
    campoCpf.setCustomValidity("");

    // Remove o erro personalizado da senha.
    campoSenha.setCustomValidity("");

    // Retorna o cursor ao CPF.
    campoCpf.focus();
}


// Ajusta a interface quando o formulário é limpo.
formularioLogin.addEventListener(
    "reset",
    limparFormulario
);


//----------------------------------------------------------------------//
// Remove os avisos personalizados ao editar os campos.

// Remove o aviso ao editar o CPF.
campoCpf.addEventListener("input", function () {

    campoCpf.setCustomValidity("");

});


// Remove o aviso ao editar a senha.
campoSenha.addEventListener("input", function () {

    campoSenha.setCustomValidity("");

});


//----------------------------------------------------------------------//
// Janela de ajuda.

// Seleciona os botões e a janela.
const botaoAbrirAjuda = document.getElementById("abrir-ajuda");
const botaoFecharAjuda = document.getElementById("fechar-ajuda");
const janelaAjuda = document.getElementById("janela-ajuda");


// Abre a janela de ajuda.
botaoAbrirAjuda.addEventListener("click", function () {

    janelaAjuda.showModal();

});


// Fecha a janela de ajuda.
botaoFecharAjuda.addEventListener("click", function () {

    janelaAjuda.close();

});


//----------------------------------------------------------------------//
//Fehca a janela de ajuda ao clicar fora dela.

// Detecta cliques na janela ou no fundo.
janelaAjuda.addEventListener("click", function (evento) {
    // Ignora cliques nos elementos internos.
    if (evento.target !== janelaAjuda) {
        return;
    }

    // Obtém os limites da janela na tela.
    const limites = janelaAjuda.getBoundingClientRect();

    // Verifica se o clique ocorreu fora da caixa.
    const clicouFora =
        evento.clientX < limites.left ||
        evento.clientX > limites.right ||
        evento.clientY < limites.top ||
        evento.clientY > limites.bottom;

    // Fecha ao clicar no fundo.
    if (clicouFora) {
        janelaAjuda.close();
    }
});