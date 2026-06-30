// Alteramos o Projetor para uma oferta de Combo e adicionamos suporte a cronômetro
const produtos = [
    {
        nome: "Projetor Magcubic Smart Android 4K + Tela de Brinde",
        link: "https://s.shopee.com.br/5VTLvBCkYr",
        imagem: "static/images/735017938_1325787876430449_5671435626027520904_n.jpg",
        precoAntigo: "R$ 599,00",
        precoNovo: "R$ 207,00",
        tag: "⚡ COMBO EXCLUSIVO: LEVE 2 ITENS",
        estrelas: "⭐⭐⭐⭐⭐ (4.7k)"
    },
    {
        nome: "Cozidor de Ovos Elétrico Express",
        link: "https://s.shopee.com.br/8V6xUfB0O9",
        imagem: "static/images/730015024_985461697620096_4555371164429736135_n.jpg",
        precoAntigo: "R$ 79,90",
        precoNovo: "R$ 29,90",
        tag: "🔥 MAIS VENDIDO",
        estrelas: "⭐⭐⭐⭐⭐ (1.4k)"
    },
    {
        nome: "Capa de Cama Soft Confort Premium (Campeã de Vendas)",
        link: "https://s.shopee.com.br/6Aj2iVPFXd",
        imagem: "static/images/730436918_1369810668392212_6336537957047394657_n.jpg",
        precoAntigo: "R$ 59,90",
        precoNovo: "R$ 13,80",
        tag: "⭐ +800 MIL UNIDADES VENDIDAS",
        estrelas: "⭐⭐⭐⭐⭐ (4.9)"
    },
    {
        nome: "Kit Café da Manhã Black Premium",
        link: "https://s.shopee.com.br/6pyjVec8Xo",
        imagem: "static/images/732001304_4484133711907969_2441535533977106852_n.jpg",
        precoAntigo: "R$ 149,90",
        precoNovo: "R$ 142,90",
        tag: "⚡ OFERTA DO DIA",
        stars: "⭐⭐⭐⭐⭐ (319)"
    },
    {
        nome: "Kit Potes de Tempero Organizador Elegance",
        link: "https://s.shopee.com.br/BRpZR0hzu",
        imagem: "static/images/732116378_1552200189774246_6808954785001161300_n.jpg",
        precoAntigo: "R$ 99,90",
        precoNovo: "R$ 28,90",
        tag: "🏠 UTILIDADE",
        estrelas: "⭐⭐⭐⭐✨ (520)"
    },
    {
        nome: "Balança Digital Cozinha de Alta Precisão",
        link: "https://s.shopee.com.br/BRpZVh5g4",
        imagem: "static/images/732299021_902172872165736_597027403453317689_n.jpg",
        precoAntigo: "R$ 49,90",
        precoNovo: "R$ 19,99",
        tag: "🎯 RESTAM 4 UNID.",
        estrelas: "⭐⭐⭐⭐⭐ (2.1k)"
    }
];

function carregarProdutos() {
    const container = document.getElementById('lista-produtos');
    
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="image-container">
                <span class="product-tag">${produto.tag}</span>
                <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="rating">${produto.estrelas}</div>
                <h3>${produto.nome}</h3>
                <div class="price-container">
                    <span class="price-old">${produto.precoAntigo}</span>
                    <span class="price-new">${produto.precoNovo}</span>
                </div>
                <p class="shipping-info">🚚 Frete Grátis Disponível</p>
                <a href="${produto.link}" target="_blank" class="btn-compra">
                    <span>Ver Detalhes na Shopee</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </div>
        `;
        container.appendChild(card);
    });

    // Inicia o cronômetro de escassez igual ao do vídeo do Balian
    iniciarCronometro();
}

function iniciarCronometro() {
    let tempo = 11 * 3600 + 36 * 60; // 11 horas e 36 minutos (referência do vídeo)
    const display = document.getElementById('countdown');
    
    setInterval(() => {
        let horas = Math.floor(tempo / 3600);
        let minutos = Math.floor((tempo % 3600) / 60);
        let segundos = tempo % 60;

        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        if (display) {
            display.textContent = `${horas}:${minutos}:${segundos}`;
        }
        
        if (--tempo < 0) tempo = 11 * 3600; // Reseta para não zerar
    }, 1000);
}

document.addEventListener('DOMContentLoaded', carregarProdutos);
