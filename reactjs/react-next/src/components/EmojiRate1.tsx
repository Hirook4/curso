function EmojiRate1() {
    /* Pegando a hora atual do pc */
    const fullTime = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
    }).format();

    /* Pegando apenas a hora */
    const hour = new Date().getHours();
    let frase = '';

    if (hour >= 0 && hour < 12) {
        frase = "Bom dia! 😀";
    } else if (hour >= 12 && hour < 18) {
        frase = "Boa Tarde! 😎";
    } else if (hour >= 18 && hour <= 23) {
        frase = "Boa Noite! 😴";

    }

    return (
        <div><h1>Exercicio 1 - Hora e saudação</h1>
            <div className="
            text-8xl w-36 h-36 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="text-xl">{fullTime}</div>
                <div className="text-xl">{frase}</div>
            </div>

            <h1>Exercicio 1 - Usando apenas condicionais na Div</h1>
            <div className="
            text-8xl w-36 h-36 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="text-xl">{fullTime}</div>
                <div className="text-xl">
                    {hour >= 0 && hour < 11 && "Bom Dia 😀"}
                    {hour >= 12 && hour < 18 && "Boa Tarde 😎"}
                    {hour >= 18 && hour <= 23 && "Boa Tarde 😴"}
                </div>
            </div>
        </div>
    );
}

export default EmojiRate1;