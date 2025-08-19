function send() {
    const usuario = document.querySelector(".usuario").value;
    const senha = document.querySelector(".senha").value;
    const preencha = document.querySelector("#preencha");
    const sucesso = document.querySelector("#sucesso");
    const negado = document.querySelector("#negado"); 

    if (usuario.length < 1 || senha.length < 1) {
        preencha.style.display = 'inline';
        setTimeout(() => {
            preencha.style.display = 'none';
        }, 1000);
        return false;
    }

    if (usuario === "luiza" && senha === "1997") {
        sucesso.style.display = 'inline';
        setTimeout(() => {
            location.href = "home/home.html"; // verificar se a pasta e arquivo existem
        }, 500);
    } else {
        negado.style.display = 'inline';
        setTimeout(() => {
            location.href = "erro/erro.html"; // corrigido de "error/erro.html"
        }, 500);
    }
}
