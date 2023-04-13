// https://jsonplaceholder.typicode.com/posts

function clicou() {

    let req = fetch('https://jsonplaceholder.typicode.com/posts');

    req.then((response) => {
        return response.json();
    }).then((json) => {
        alert(`titulo do primeiro post ${json[0].title}`);
    }).catch((error) => {
        console.log("Erro");
        console.log(error);
    }).finally(() => {
        console.log('Fim');
    })
}

// Usando Async Await
async function clicou2() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`titulo do primeiro post ${json[0].title}`);
    alert('clicou');
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo Teste',
                body: 'Corpo Teste',
                userId: 2,
            })
        }).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
        })
}

// Usando Async Await
async function inserir2() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo Teste',
                body: 'Corpo Teste',
                userId: 2,
            })
        });

    let json = await response.json();
    console.log(json);
}

document.querySelector('.btn').addEventListener('click', clicou);
document.querySelector('.btn2').addEventListener('click', clicou2);
document.querySelector('.inserir').addEventListener('click', inserir);
document.querySelector('.inserir2').addEventListener('click', inserir);
