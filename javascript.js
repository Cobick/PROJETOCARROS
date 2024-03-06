// variavel de lista de carros
let listaCarros = [
    {
        "nome": "Porsche",
        "img": "img/porsche-4795517_640.jpg",
        "descricao": "Entre no mundo da velocidade e da sofisticação com o Porsche. Este ícone da engenharia alemã combina tecnologia de ponta com um design atemporal, oferecendo uma experiência de condução incomparável. Equipado com um motor potente e responsivo, o Porsche oferece uma aceleração impressionante e um desempenho de classe mundial em todas as condições de direção. Cada detalhe foi refinado para proporcionar uma experiência de condução emocionante e envolvente.",
    },
    {
        "nome": "Alfa Romeo",
        "img": "img/alfa-romeo-7968027_640.jpg",
        "descricao": "Prepare-se para uma experiência de condução emocionante com o Alfa Romeo. Este carro de luxo italiano combina estilo distinto, desempenho dinâmico e uma herança de corrida lendária para oferecer uma experiência única na estrada. Com um motor potente e ágil, o Alfa Romeo oferece uma condução emocionante e responsiva em cada curva. Desfrute da sensação da estrada sob seus pés enquanto você acelera de 0 a 100 km/h em questão de segundos.",
    },
    {
        "nome": "Mercedez",
        "img": "img/auto-2179220_640.jpg",
        "descricao": "Entre no mundo do luxo e da engenharia de precisão com o Mercedes-Benz. Este ícone da excelência automotiva combina elegância, desempenho e tecnologia de ponta para uma experiência de condução verdadeiramente excepcional. Sob o capô, você encontrará um motor poderoso e eficiente, proporcionando uma aceleração suave e responsiva que eleva a experiência de dirigir a novos patamares. Cada detalhe foi projetado para oferecer um desempenho excepcional, sem comprometer o conforto ou a eficiência.",
    },
    {
        "nome": "Audi",
        "img": "img/car-604019_640.jpg",
        "descricao": "Apresentamos o Audi, uma expressão de elegância, inovação e desempenho excepcional. Este carro premium oferece uma combinação perfeita de luxo, tecnologia avançada e uma experiência de condução emocionante. Equipado com o que há de mais recente em tecnologia automotiva, o Audi oferece uma condução inteligente e conectada. Desde os sistemas de assistência ao motorista até as características de entretenimento de última geração, este carro é projetado para tornar cada viagem mais segura, confortável e envolvente.",
    },
    {
        "nome": "Ferrari",
        "img": "img/ferrari-3090880_640.jpg",
        "descricao": "Entre no mundo da velocidade e da elegância com a Ferrari. Este ícone do automobilismo italiano combina desempenho de classe mundial com um design deslumbrante, oferecendo uma experiência de condução incomparável. Sob o capô, você encontrará um motor potente que é a essência da engenharia de alto desempenho da Ferrari. Cada rugido do motor é uma sinfonia de poder e precisão, capaz de acelerar de 0 a 100 km/h em questão de segundos.",
    },
    {
        "nome": "Opel",
        "img": "img/opel-5190050_640.jpg",
        "descricao": "Apresentamos o Opel, uma fusão perfeita de inovação, qualidade e estilo. Este carro cativante oferece uma experiência de condução que vai além das expectativas, combinando tecnologia avançada, desempenho confiável e design marcante. Equipado com tecnologias de ponta, o Opel oferece uma condução inteligente e segura. Desde os sistemas avançados de assistência ao motorista até as inovações em conectividade e entretenimento, este carro está pronto para enfrentar os desafios da estrada moderna.",
    },
]

// criando os cards de carros dinamicamente com js
listaCarros.map((carro, posicao)=> {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
                <div class="col-md-4">
                <div class="card m-4">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-secondary" onClick ="zommImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>
    `
})

// função reconhecendo em qual carro o usuario clicou
function zommImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    // acionar o modal com bootstrap
    new bootstrap.Modal('#zommImg').show();
}

// codigo função botao dark e light
function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }
    else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}