import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import "./Drum.css";

const INITIAL_DRUM_DATA = {
  aros: "0mm",
  marca: "None",
  modelo: "None",
  precio: 0,
  stock: 1,
  terminacion: "default",
  torres: {
    bombo: 0,
    floorTom: 0,
    tambor: 0,
    toms: 0,
  },
};

function Drum() {
  const { drumId } = useParams();
  const navigate = useNavigate();
  const [drumData, setDrumData] = useState(INITIAL_DRUM_DATA);

  useEffect(() => {
    // TODO: Obtener datos del documento según el ID
    const drumDocRef = doc(db, "drums_", drumId);

    getDoc(drumDocRef).then((docSnapshot) => {
      console.log(docSnapshot.data());
      let drumDataById = docSnapshot.data();
      drumDataById = Object.assign(drumDataById, { id: docSnapshot.id });
      setDrumData(drumDataById);
    });
  }, [drumId]);

  const onClickHandler = () => navigate(-1);

  return (
    <div className="drum-detail__container">
      <button onClick={onClickHandler}>Go back</button>
      <ItemCard type="detail" data={drumData} />
    </div>
  );
}

export default Drum;
