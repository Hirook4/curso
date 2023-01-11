
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
        console.log(pizzaJson[key]);

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;


        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
        console.log('click');
    });

    // Preenche Modelo
    c('.pizza-area').append(pizzaItem);
});