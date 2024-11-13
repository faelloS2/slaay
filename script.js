const botoesProximo = document.querySelectorAll('.btn-proximo, .btn-iniciar, .btn-reiniciar');

botoesProximo.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        if (proximoPasso === "inicio") {
            document.getElementById('inicio').classList.add('ativo');
        } else {
            document.getElementById('passo-' + proximoPasso).classList.add('ativo');
        }
    });
});
