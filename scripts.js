function verificarEntrada(){
    nomeConvidado = document.getElementById('nome').value;
    convidadosMatheus = ['Jessica', 'Selma', 'Igor','Jose'];
    if (convidadosMatheus.includes(nomeConvidado)) {
        document.getElementById('permissaoDeEntrada').innerText = 'Você pode Entrar'
    }    else {
        document.getElementById('permissaoDeEntrada').innerText = 'Você não pode Entrar'
    }
}