// importo tre hook:
// - createContext crea un contesto condiviso fra componenti
// - useState gestisce lo stato locale di un componente
// - use Context accede ai dati forniti dal provider del context, mi permete di usare un contesto creato con createContext
import { createContext, useState, useContext } from "react";

// creo un contesto iniziale chiamato GLobalStateContext con valore iniziale null.
// è come una casseta postale condivisa inizialmente vuota(null)
export const GlobalStateContext = createContext(null);

// definisco un componente funzionale ContextExample ed inizializzo la variabile di stato
// isToggle è come un interruttore della luce, al momento è spento false
export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);
// il componente funzionale ContextExample restituisce un JSX che include:
// - provider del contesto GlobalStateContext che fornisce il 
// valore corrente di isToggle e la funzione setIsToggle ai componenti figli
// - un <div> contenente i due figli: ChildToggle, ChildDisplay
  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  );
};
// Il componente ChildToggle accede alla funzione setIsToggle dal contesto e
// la utilizza per invertire lo stato di isToggle quando il pulsante viene cliccato.​

const ChildToggle = () => {
  const { setIsToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};

// Child Component to Display State
// Il componente ChildDisplay accede al valore di isToggle dal contesto e
// visualizza "ON" se isToggle è true, altrimenti "OFF".
const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);

  return (
    <div>
      <p>Current State: {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};

// ContextExample crea un contesto globale con isToggle e setIsToggle.
// ChildToggle può modificare lo stato globale utilizzando setIsToggle.
// ChildDisplay visualizza lo stato corrente di isToggle.