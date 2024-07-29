/* Primeiro projeto com NextJS e TS */
/* Importando default e componentes separados */
/* import Default, { Square, Circle } from '@/components/shapes' */

import { Card } from "@/components/card";
import { EmojiRate } from "@/components/EmojiRate";
import Exercicio1 from "@/components/Exercicio1";
import { Person } from "@/components/person";
import { Shapes } from "@/components/shapes";
import { StudentTable } from "@/components/StudentsTable";
/* Usando o componente shapes que une as duas formas */

/* Usando o componente peopleList.ts da pasta data */
import { peopleList } from "@/data/peopleList";
import { students } from "@/data/Student";

const devs = peopleList.filter(person => person.job === 'Programador');





function Page() {
  return (
    <div className='m-5'><h1 className="font-bold">Ola mundo</h1><br />
      <h3 className="text-lg">Primeiro projeto</h3>
      <Shapes /><br /><br />
      {/* Passando props para person */}
      <Person
        name="Leonardo Hirooka"
        avatar='https://media.licdn.com/dms/image/D4D03AQFKpT-OFtbFmA/profile-displayphoto-shrink_800_800/0/1688413634145?e=1727308800&v=beta&t=c352-fd-vwNFmlaUUOIq6izYZGXoW-7vDfz97eqzW9Y'
        roles={['Estudante', 'Programador']}
      /><br></br>
      {/* {
    //Usando children
  }
  <Card>
    {
      // Passando dentro de uma tag pq só podemos mandar 1 item (mas pode ter varios dentro)
    }
    <>
      <h3>Frases com Children</h3>
      <p>Frase 1</p>
      <p>Frase 2</p>
    </>
  </Card> */}

      {
        //Exemplo Renderização Condicional
      }
      <Card frase="Frase Top" autor=""></Card><br /><br />

      <h1>---Renderizando lista do arquivo peopleList usando map</h1>
      <ul>
        {peopleList.map(person => <li key={person.id}>{person.name} - {person.job}</li>)}
      </ul><br />

      {devs.length > 0 && <><h3>---Lista com filtro da linha 13</h3>
        <ul>
          {devs.map(person => <li key={person.id}>{person.name} - {person.job}</li>)}
        </ul></>
      }
      <br /><br />
      <Exercicio1></Exercicio1><br /><br />

      <EmojiRate rate={3.5} /> <br /> <br />

      <div>
        <StudentTable students={students} />
      </div>

    </div >
  );


}

/* Outra forma de função 
const Page = () => {
  return
  <div><h1 className="font-bold">Ola mundo</h1><br />
    <h3 className="text-lg">Primeiro projeto</h3>
  </div>
}
*/

/* Temos que exportar os componentes para eles seram usados */
/* Export default indica que o que vai representar esse componente sera esse Page por padrão */
export default Page;

