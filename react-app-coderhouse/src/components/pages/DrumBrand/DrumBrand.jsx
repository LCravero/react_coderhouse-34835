import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Button from "../../Button/Button";
import ItemCard from "../../ItemCard/ItemCard";
import "./DrumBrand.css";

function DrumBrand(props) {
  const { brand } = props;
  const [drumsByBrandItems, setDrumsByBrandItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const drumsCollection = collection(db, "drums_");

    const q = query(drumsCollection, where("marca", "==", `${brand}`));

    getDocs(q).then((querySnapshot) => {
      const _drumsList = [];

      querySnapshot.forEach((drum) => {
        let drumData = drum.data();
        drumData = Object.assign(drumData, { id: drum.id });
        // drumData = { ...drumData, id: drum.id  };
        _drumsList.push(drumData);
      });

      setDrumsByBrandItems(_drumsList);
    });
  }, [brand]);

  return (
    <div className="drum-brand-page__container">
      <Button label="Go Back" onClick={() => navigate(-1)} />
      <div className={`${brand}-list drums-list`}>
        {drumsByBrandItems.map((item) => (
          <ItemCard key={item.id} data={item} path={item.id} />
        ))}
      </div>
    </div>
  );
}

export default DrumBrand;
