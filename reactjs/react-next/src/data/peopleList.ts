/* Como temos informações fixas aqui criamos esse arquivo people.ts nessa pasta data e vamos exporta-lo */
/* Tambem vamos tipar ele no arquivo person.ts dentra da pasta types */
import { Person } from "@/types/person";

/* Alem de tipar nós definimos que essa lista é do tipo Array de Person */
export const peopleList: Person[] = [
  { id: 1, name: "Leonardo", job: "Programador" },
  { id: 2, name: "Helyf", job: "Programador" },
  { id: 3, name: "Lucas", job: "Engenheiro" },
  { id: 4, name: "Wash", job: "Sustentação" },
  { id: 5, name: "Erika", job: "Techlead" } /*  */,
];
