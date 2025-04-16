// importo gli hook useEffect e useState dalla libreria di React
// - useState: permette di gestire lo stato locale all'interno di un componente funzionale.
// - useEffect: permette di fare il fetching dei dati,
// manipolazione diretta del DOM dopo che il componente è stato renderizzato
// useEffect è come un promemoria che ricorda di fare una certa azione ogni qualvolta alcune condizioni cambiano.
import { useEffect, useState } from "react";

// definisco il componente funzionale EffectExample.
// con useEffect creo due variabili di stato: data, inizialmente un array vuoto, destinato a contenere i dati di un'API
// showPedro: un booleano impostato inizialmente su false che uso per controllare la visuazlizzazione di "Pedro"
export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showPedro, setShowPedro] = useState(false);

// utilizzo useEffect per eseguire un effetto collaterale -> fetching di dati da un'API
// la funzione "fetch" invia una richiesta HTTP all'url, ricevuta la risposta convertiamo in JSON
// utilizziamo setData per aggiornare lo stato data con i dati ottenuti
// l'array vuoto come secondo argomento indica che l'effetto deve essere eseguito una sola volta, al montaggio del componente
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
// utilizzo useEffect per avere un effetto collaterale -> stampa "Pedro" nel
// console log ogni volta che il valore di showPedro cambia
// L'array [showPedro] indica che questo effetto deve essere eseguito
// ogni volta che showPedro viene aggiornato.
  useEffect(() => {
    console.log("Pedro");
  }, [showPedro]);


// il componente funzionale "EffectExample" restituisce un blocco jsx
// il button inverte il valore di showPedro da false a true e viceversa
// una <ul> sulla quale eseguiamo un map e riportiamo il titolo
  return (
    <div>
      <button onClick={() => setShowPedro((prev) => !prev)}> Toggle </button>
      <h1> Posts</h1>
      <ul>
        {data.map((item) => (
          <li>{item.title} </li>
        ))}
      </ul>
    </div>
  );
};
