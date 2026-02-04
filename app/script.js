function carregarDados() {
    fetch('../data/produtos.json')
    .then(response => response.json())
    .then(response => renderizarCards(response))
}

function renderizarCards(dados) {
    const main = document.querySelector("main")
    main.innerHTML = ""
    dados.forEach(product => {
        const card = document.createElement("div")
        card.classList.add('card')
        card.innerHTML = `
            <h2>${product.nome}</h2>
            <img src="${product.img != ''?product.img:'./assets/nenhum.png'}">
        `
        main.appendChild(card)
    });
}