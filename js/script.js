/* =====================================================
   BIBLIOTECA VIRTUAL GONÇALVES DIAS
   JAVASCRIPT GERAL
===================================================== */

// Abrir e fechar modais
function abrirModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.add("active");
    }
}

function fecharModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("active");
    }
}


// Fechar modal clicando fora
document.addEventListener("click", function (event) {

    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("active");
    }

});


// Fechar modal com ESC
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal.active")
            .forEach(function (modal) {
                modal.classList.remove("active");
            });

    }

});


// Formatação simples de texto
function escaparHTML(texto) {

    if (!texto) return "";

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// Criar ID único
function gerarId() {

    return Date.now().toString() +
        Math.random().toString(36).substring(2, 9);

}


// Ler arquivo de imagem
function lerImagemArquivo(input, callback) {

    const arquivo = input.files[0];

    if (!arquivo) {
        callback(null);
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function (evento) {
        callback(evento.target.result);
    };

    leitor.readAsDataURL(arquivo);
}


// Mostrar mensagem rápida
function mostrarMensagem(mensagem) {

    let aviso = document.getElementById("mensagem-site");

    if (!aviso) {

        aviso = document.createElement("div");

        aviso.id = "mensagem-site";

        aviso.style.position = "fixed";
        aviso.style.bottom = "25px";
        aviso.style.right = "25px";
        aviso.style.background = "#304b2f";
        aviso.style.color = "#ffffff";
        aviso.style.padding = "14px 20px";
        aviso.style.borderRadius = "8px";
        aviso.style.zIndex = "10000";
        aviso.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

        document.body.appendChild(aviso);
    }

    aviso.textContent = mensagem;

    aviso.style.display = "block";

    setTimeout(function () {
        aviso.style.display = "none";
    }, 2500);
}
