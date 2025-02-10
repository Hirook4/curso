import { Item } from "@/app/Types/Item";

type AddAction = {
  /* Define a ação */
  type: "add";
  /* Texto que será adicionado à lista */
  payload: { text: string };
};

type editTextAction = {
  type: "editText";
  payload: {
    id: number;
    newText: string;
  };
};

type ToggleDoneAction = {
  type: "toggleDone";
  payload: { id: number };
};

type removeAction = {
  type: "remove";
  payload: { id: number };
};

/* Junta todos os tipos de ação (add, editText, toggleDone, remove) em um tipo chamado ListActions */
type ListActions = AddAction | editTextAction | ToggleDoneAction | removeAction;

/* Define o reducer chamado listReducer que recebe dois parâmetros:
list: um array de itens do tipo Item que representa o estado da lista
action: um objeto que representa a ação a ser executada (qualquer ação definida em ListActions) */
export const listReducer = (list: Item[], action: ListActions) => {
  /* Acessa o tipo da ação que será realizada (como add) */
  action.type;

  /* Acessa o payload da ação, que contém as informações necessárias (como text e id) */
  action.payload;

  switch (action.type) {
    case "add":
      return [
        ...list,
        {
          id: list.length,
          text: action.payload.text,
          done: false,
        },
      ];

    case "editText":
      return list.map((t) => {
        if (t.id === action.payload.id) {
          t.text = action.payload.newText;
        }
        return t;
      });

    case "toggleDone":
      return list.map((t) => {
        if (t.id === action.payload.id) t.done = !t.done;
        return t;
      });

    case "remove":
      return list.filter((t) => t.id !== action.payload.id);

    default:
      return list;
  }
};
