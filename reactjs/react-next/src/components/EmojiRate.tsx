type Props = {
    rate: number;
}

export const EmojiRate = ({ rate }: Props) => {
    /* Solução 1 */
    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;
    const rateInt = Math.floor(rate);
    const stars = '⭐'.repeat(rateInt) + '❌'.repeat(5 - rateInt);

    /* Solução 2 */
    const emojis = ['', '😭', '🙁', '😐', '🙂', '😃'];
    const stars2 = `${emojis[rateInt]}`.repeat(rateInt) + '❌'.repeat(5 - rateInt);
    return (
        <div className="">
            <h1>Exercicio 2 - Props Rating</h1>
            <div className="bg-gray-700 p-2 rounded w-max ">
                Trocar quantidade de estrelas na Page.tsx
                <div >{rate.toFixed(1)}</div>
                <div>{stars}</div></div>

            <h1>Exercicio 2 - Outra solução</h1>
            <div className="bg-gray-700 p-2 rounded w-max ">
                Trocar quantidade de estrelas na Page.tsx
                <div >{rate.toFixed(1)}</div>
                <div>{stars2}</div></div>
        </div>
    );
}