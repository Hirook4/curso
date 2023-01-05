
// Função que seleciona o item
const c = (e) => {
    return document.querySelector(e);
}

// Função que seleciona array com os itens encontrador
const cs = (e) => {
    return document.querySelectorAll(e);
}

pizzaJson.map((item, index) => {
    // Clona a estrutura model
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Preenche Modelo
    c('.pizza-area').append(pizzaItem);
});