import {useEffect, useState} from 'react';
import {db} from './firebase/config';
import {
  // doc,
  // getDoc,

  collection,
  getDocs,

  query,
  where,
} from 'firebase/firestore';
import './App.css';

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const clientsCollection = collection(db, 'clients');

    const q = query(
      clientsCollection,
      where('country', '==', 'USA')
    );

    getDocs(q)
      .then((querySnapshot) => {
        const clientsList = [];

        // OPCION 1: Iterar sobre una lista de documentos usando el método forEach de la API de QuerySnapshot
        querySnapshot.forEach((client) => {
          console.log(client.data());
          clientsList.push(client.data());
        })

        setClients(clientsList)

        // OPCION 2: Iterar sobre una lista de documentos y crear una nueva lista solamente con la data de cada documento

        // const clientsList = querySnapshot.docs().map((doc) => doc.data());
        // setClients(clientsList);
      })
  }, [])

  // TODO: Línea 43 a 59 para traer UN SOLO documento de una colección

  /* const [client, setClient] = useState(null);
  const docRef = doc(db, '/clients', 'CQn3OHMqrPcwFmNmhs8C'); */

  /* useEffect(() => {
    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          console.log('El Cliente buscado es: ', docSnapshot.data());
          setClient(docSnapshot.data());

          // console.log(docSnapshot.get('name'));
          // console.log(docSnapshot.get(address.number)); --> suponiendo que tengo un atributo de tipo objeto con atributos dentro
          // console.log(docSnapshot.id);

        }
      })
  }, []); */

  return (
    <div className="App">
      {
        clients.length
          ? (
            <div className="client-data__container">
                {
                  clients.map((client) => (
                    <ul key={client.id}>
                      <li className="client__name">{client.name}</li>
                      <li className="client__category">{client.category}</li>
                      <li className="client__country">{client.country}</li>
                    </ul>
                  ))
                }
            </div>
          )
          : (
            <span>Obteniendo data del cliente...</span>
          )
      }
    </div>
  );
}

export default App;
