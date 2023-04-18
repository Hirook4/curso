document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrao, no caso para nao enviar a atualizar a pagina

    let input = document.querySelector('#searchInput').value; // Selecina o que foi digitado


    if (input === 'POST MALONE') {
        clearInfo();
        window.open('https://youtu.be/dpMHpUyNRkc', '_blank');
    } else {
        if (input !== '') {
            clearInfo();
            showWarning('Carregando...');
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=05c4b5aa7c61dded804861604e531a7d&units=metric&lang=pt_br`
            let result = await fetch(url);// Pega o resultado da requisição
            let json = await result.json(); // Transforma o resultado em JSON

            if (json.cod === 200) {
                showInfo({
                    name: json.name,
                    country: json.sys.country,
                    temp: json.main.temp,
                    icon: json.weather[0].icon,
                    wind: json.wind.speed,
                    windAngle: json.wind.deg
                })
            } else {
                clearInfo();
                showWarning('Não Encontramos Esse Localização');
            }

        } else {
            clearInfo();
            showWarning('Digite uma Localização');
        }
    }

});

// Mostra dados
function showInfo(json) {
    showWarning('');

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sub>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.wind}<span>km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.icon}@2x.png`)

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`

    document.querySelector('.resultado').style.display = 'block';
}

// Limpa dados
function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

// Exibe aviso
function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;

}