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

// Exibe carrinho no mobile
c('.menu--openner').addEventListener('click', () => {
    if (cart.length > 0) {
        c('aside').style.left = '0';
    }
});

// Fecha carrinho no mobile
c('.menu--closer').addEventListener('click', () => {
    c('aside').style.left = '100vw';
});

function updateCart() {
    c('.menu--openner span').innerHTML = cart.length;
    if (cart.length > 0) {
        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for (let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            subtotal = subtotal + pizzaItem.price * cart[i].qtd;

            let cartItem = c('.models .cart--item').cloneNode(true);
            let pizzaSizeName;
            switch (cart[i].size) {
                case 0:
                    pizzaSizeName = 'P'
                    break;
                case 1:
                    pizzaSizeName = 'M'
                    break;
                case 2:
                    pizzaSizeName = 'G'
                    break;

                default:
                    break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item--nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qtd;

            cartItem.querySelector('.cart--item--qtmais').addEventListener('click', () => {
                cart[i].qtd++;
                updateCart();
            });

            cartItem.querySelector('.cart--item--qtmenos').addEventListener('click', () => {
                // Remove a pizza do carrinho se q quantidade zerar
                if (cart[i].qtd > 1) {
                    cart[i].qtd--;
                } else {
                    cart.splice(i, 1);
                    console.log('Removeu')
                }
                updateCart();
            });

            c('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
    } else {
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw';
    }
}