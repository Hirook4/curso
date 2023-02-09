// Função que seleciona o item
const c = (e) => {
    return document.querySelector(e);
}

// Função que seleciona array com os itens encontrador
const cs = (e) => {
    return document.querySelectorAll(e);
}
let cart = [];
let modalQtd = 1;
let modalKey = 0;

// Listagem das Pizzas
pizzaJson.map((item, index) => {
    // Clona a estrutura model
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    // Define um atributo em cada pizza
    pizzaItem.setAttribute('data-key', index);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Abrindo Modal
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        // Populando Modal
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQtd = 1;
        modalKey = key;

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`

        c('.pizzaInfo--size.selected').classList.remove('selected'); // Remove a Seleção do Tamanho

        cs('.pizzaInfo--size').forEach((size, index) => {
            if (index == 2) { // Tamanho Grande Selecionado Por Padrão
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[index]
        });

        c('.pizzaInfo--qt').innerHTML = modalQtd;

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    });

    // Preenche Modelo
    c('.pizza-area').append(pizzaItem);
});

// Eventos Modal
function closeModal(params) {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
})

// Controlar quantidade de pizzas
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQtd >= 2) {
        modalQtd--;
        c('.pizzaInfo--qt').innerHTML = modalQtd;
    }

})

c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQtd++;
    c('.pizzaInfo--qt').innerHTML = modalQtd;
})

// Selecionar tamanho da pizza
cs('.pizzaInfo--size').forEach((size, index) => {
    size.addEventListener('click', (e) => {
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
});

// Adicionar ao Carrinho

c('.pizzaInfo--addButton').addEventListener('click', () => {


    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));

    let identifier = pizzaJson[modalKey].id + '@' + size;

    // Verificar se o item ja existe no carrinho
    let key = cart.findIndex((item) => item.identifier == identifier);

    if (key > -1) {
        cart[key].qtd += modalQtd;
    } else {
        cart.push({
            // Identificador
            identifier,
            // Sabor
            id: pizzaJson[modalKey].id,
            // Tamanho
            size,
            // Quantidade
            qtd: modalQtd,
        });
    }
    updateCart();
    closeModal();
})

// Atualiza e exibe o carrinho
function updateCart() {
    if (cart.length > 0) {
        c('aside').classList.add('show');
        for (let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);

            console.log(pizzaItem);
        }

    }
}