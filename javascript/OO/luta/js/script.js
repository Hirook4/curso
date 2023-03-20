let char = new Knight('Cavaleiro Solaire');
console.log(char);

let monster = new Monster();
console.log(monster);

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start();