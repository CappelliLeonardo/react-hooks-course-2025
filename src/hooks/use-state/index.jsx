// importo l'hook "useState" con il quale posso
// aggiungere uno stato locale al componente funzionale
import { useState } from "react";

// definisco il componente funzionale "StateExample" che
// potrà essere usato anche in altre parti dell'applicazione
export const StateExample = () => {

// utilizzo l'hook useState per dichiarare una variabile
// di stato chiamata count e la inizializzo a zero.
// setCount è la f che mi permette di aggiornare il valore
  const [count, setCount] = useState(0);
// definisco una nuova f che quando viene chiamata incrementa il valore di count tramite
// setCount successivamente stampa il valore di count con il console.log
// L'AGGIORNAMENTO DI COUNT è ASINCRONO:
// -> console.log(count) 0
// -> count 1
  const increaseCount = () => {
    setCount((prev) => prev + 1);

    console.log(count);
  };

// viene restituito un blocco JSX che rappresenta l'interfaccia user:
// - un <p> che contiene il count
//- un button che al click (onClick) aumenta il count attraverso increaseCount

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={increaseCount}> Increase Counter</button>
    </div>
  );
};
