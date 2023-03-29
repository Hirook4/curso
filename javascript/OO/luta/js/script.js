let log = new Log(document.querySelector('.log'));

let char = new Knight('Cavaleiro Solaire');
console.log(char);

let monster = new BigMonster();
console.log(monster);

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log,
);

stage.start();