import { createContext, ReactNode, useState } from "react";

type CountContextType = {
  onlineCount: number;
  setOnlineCount: (n: number) => void;
};

// Cria o contexto com valores padrão
export const CountContext = createContext<CountContextType>({
  onlineCount: 0,
  setOnlineCount: () => { },
});

type Props = { children: ReactNode };
export const CountProvider = ({ children }: Props): JSX.Element => {
  const [onlineCount, setOnlineCount] = useState(45);

  return (
    <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
      {children}
    </CountContext.Provider>
  );
};
