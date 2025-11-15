function fugir() {
    const btnNao = document.getElementById("btn-nao");
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;
    btnNao.style.position = "fixed"; 
    
    const novaEsquerda = Math.random() * (larguraJanela - 100);
    const novaTopo = Math.random() * (alturaJanela - 50);

    btnNao.style.left = novaEsquerda + "px";
    btnNao.style.top = novaTopo + "px";
}
function aceitar() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#81c784', '#ff7043', '#4caf50']
    });
    document.querySelector('.btn-container').style.display = 'none';
    document.getElementById('mensagem-final').style.display = 'block';
    setTimeout(() => {
        const seuNumero = "5534987213997"; 
        const mensagem = encodeURIComponent("Oi!Eu aceitei o seu convite!Quando vamos sair? 🥑");
        window.location.href = `https://wa.me/${5534987213997}?text=${"Oi!Eu aceitei o seu convite!Quando vamos sair? 🥑"}`;
    }, 2500);

}




