import adidasModel1 from "../assets/adidas/adidas01.webp";
import adidasModel2 from "../assets/adidas/adidas02.webp";
import adidasModel3 from "../assets/adidas/adidas03.webp";
import pumaArrModel1 from "../assets/puma/puma01.webp";
import pumaArrModel2 from "../assets/puma/puma02.webp";
import pumaArrModel3 from "../assets/puma/puma03.webp";
import nikeModel1 from "../assets/nike/nike01.webp";
import nikeModel2 from "../assets/nike/nike02.webp";
import nikeModel3 from "../assets/nike/nike03.webp";

export type ItemType = {
  id: number;
  model: string;
  collection: string;
  price: string;
  picture: string;
};
export type stateArrayType = {
  [key: string]: ItemType[];
};

export const stateArray: stateArrayType = {
  adidas: [
    {
      id: 1,
      model: "ADIDAS ADIFOM TRXN",
      collection: "new collection1",
      price: "100200$",
      picture: adidasModel1,
    },
    {
      id: 2,
      model: "ADIDAS ADIFOM SUPER",
      collection: "new collection22",
      price: "200300$",
      picture: adidasModel2,
    },
    {
      id: 3,
      model: "ADIDAS SUPER SUPERSKI",
      collection: "new collection333",
      price: "300400$",
      picture: adidasModel3,
    },
  ],
  puma: [
    {
      id: 1,
      model: "Puma 01",
      collection: "new collection1",
      price: "100200$",
      picture: pumaArrModel1,
    },
    {
      id: 2,
      model: "Puma 02",
      collection: "new collection22",
      price: "200300$",
      picture: pumaArrModel2,
    },
    {
      id: 3,
      model: "Puma 03",
      collection: "new collection333",
      price: "300400$",
      picture: pumaArrModel3,
    },
  ],
  nike: [
    {
      id: 1,
      model: "Nike 01",
      collection: "new collection1",
      price: "100200$",
      picture: nikeModel1,
    },
    {
      id: 2,
      model: "Nike 02",
      collection: "new collection22",
      price: "200300$",
      picture: nikeModel2,
    },
    {
      id: 3,
      model: "Nike 03",
      collection: "new collection333",
      price: "300400$",
      picture: nikeModel3,
    },
  ],
};
