import React from "react";

import adidasModel1 from "../../assets/adidas/adidas01.webp";
import adidasModel2 from "../../assets/adidas/adidas02.webp";
import adidasModel3 from "../../assets/adidas/adidas03.webp";
import { Link } from "react-router-dom";

export type AdidasItem = {
  id: number;
  model: string;
  collection: string;
  price: string;
  picture: string;
};
export const adidasArr: AdidasItem[] = [
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
];

export const Adidas = () => {
  return (
    <div>
      <h2>ADIDAS</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {adidasArr.map((el, i) => {
          return (
            <Link key={i} to={`/adidas/${el.id}`}>
              <img src={el.picture} style={{ width: "200px", marginRight: "10px" }} alt={"picture not found"} />
            </Link>
          );
        })}
      </div>
      <p>
        page1 - what is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader
      </p>
    </div>
  );
};
