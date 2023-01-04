// Fetch

function load() {
    document.getElementById("posts").innerHTML = 'Carregando...';
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado) {
            return resultado.json();

        }).then(function (json) {
            montar(json);
        })

        .catch(function (error) {
            console.log('Erro');
        });
}

function montar(lista) {
    let html = '';
    for (let i in lista) {
        html = html + '<h3>' + lista[i].title + '</h3>';
        html = html + lista[i].body + '<br/>';
        html = html + '<hr/>';
    }

    document.getElementById("posts").innerHTML = html;

}

// Async e Await

async function load() {
    document.getElementById("posts").innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montar(json);
}

function montar(lista) {
    let html = '';
    for (let i in lista) {
        html = html + '<h3>' + lista[i].title + '</h3>';
        html = html + lista[i].body + '<br/>';
        html = html + '<hr/>';
    }

    document.getElementById("posts").innerHTML = html;

}

// Fetch com POST

async function inserirPost() {
    document.getElementById("posts2").innerHTML = "Carregando...";
    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo',
            body: 'Corpo',
            id: '1'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await req.json();

    console.log(json);
}

// Upload de Arquivos

async function enviar() {
    let arquivo = document.getElementById('arquivo').files;
    console.log(arquivo);

    let body = new FormData();
    body.append('titulo', 'nome');
    body.append('arquivo', arquivo);

    let req = await fetch('www.meusite.com/upload', {
        method: 'POST',
        body: body,
        headers: { 'Content-type': 'multipart/form-data' }
    });
}


// Thumbnail
function mostrar() {
    let imagem = document.getElementById("imagem").files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById("area").appendChild(img);
}

// Thumbnail com FileReader
function mostrar2() {
    let reader = new FileReader();
    let imagem = document.getElementById("imagem2").files[0];

    reader.onloadend = function () {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;
        document.getElementById("area2").appendChild(img);
    }
    reader.readAsDataURL(imagem);

}