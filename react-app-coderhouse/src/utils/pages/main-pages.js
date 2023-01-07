import React from "react";
import DrumBrand from "../../components/pages/DrumBrand/DrumBrand";

export const PAGES = [
  {
    id: "solidrums",
    path: "/solidrums",
    name: "Solidrums",
    element: <DrumBrand brand="solidrums" />,
  },
  {
    id: "mapex",
    path: "/mapex",
    name: "Mapex",
    element: <DrumBrand brand="mapex" />,
  },
  {
    id: "tama",
    path: "/tama",
    name: "Tama",
    element: <DrumBrand brand="tama" />,
  },
  {
    id: "cart",
    path: "/cart",
    name: "Cart",
  },
];
