import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import ItemCard from "../../ItemCard/ItemCard";
import "./Home.css";

function Home() {
  const [drumsList, setDrumsList] = useState([]);

  useEffect(() => {
    const drumsCollectionRef = collection(db, "drums_");

    getDocs(drumsCollectionRef).then((querySnapshot) => {
      const _drumsList = [];

      querySnapshot.forEach((drum) => {
        let drumData = drum.data();
        drumData = Object.assign(drumData, { id: drum.id });
        _drumsList.push(drumData);
      });

      setDrumsList(_drumsList);
    });
  }, []);

  return (
    <div className="home-page__container">
      <div className="drums-list__container">
        {drumsList.length ? (
          drumsList.map((drum) => (
            <ItemCard
              key={drum.id}
              data={drum}
              path={`${drum.marca}/${drum.id}`}
            />
          ))
        ) : (
          <span>Cargando data de baterías disponibles...</span>
        )}
      </div>
    </div>
  );
}

export default Home;
