
function weekDay() {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date());
}

/* Definindo um tipo Props */
type Props = {
    /* ? = opcional */
    name?: string;
    avatar: string;
    roles: string[];
}

export const Person = ({ name = 'valorPadrao', avatar, roles }: Props) => {
    /* Usando variaveis
    const name: string = 'Leonardo Hirooka'
    const avatar: string = 'https://media.licdn.com/dms/image/D4D03AQFKpT-OFtbFmA/profile-displayphoto-shrink_800_800/0/1688413634145?e=1727308800&v=beta&t=c352-fd-vwNFmlaUUOIq6izYZGXoW-7vDfz97eqzW9Y';
    */

    /* Usando objeto
    const data = {
        name: 'Leonardo Hirooka',
        avatar: 'https://media.licdn.com/dms/image/D4D03AQFKpT-OFtbFmA/profile-displayphoto-shrink_800_800/0/1688413634145?e=1727308800&v=beta&t=c352-fd-vwNFmlaUUOIq6izYZGXoW-7vDfz97eqzW9Y',
        roles: ['Estudante', 'Programador']
    } */

    /* Usando Props, tambem podemos colocar direto no parametro como visto acima
    const { name, avatar, roles } = props; */

    return (
        /* Tag vazia para colocar as coisas dentro sem ser afetado por nada */
        <>
            <h1 style={{ color: 'yellow' }}>{'Ola, ' + name + " " + roles[0] + ' hoje é ' + weekDay()}</h1>
            <img className="w-20 h-20" src={avatar} alt="" />
        </>
    );
}