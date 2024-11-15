import React from "react";
import { Link } from "react-router-dom";
import { ItemType } from "../State";

type Props = {
  state: ItemType[];
};

export const Adidas = ({ state }: Props) => {
  return (
    <div>
      <h2>ADIDAS</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {state.map((el, i) => {
          return (
            <Link key={i} to={`/adidas/${el.id}`}>
              <img src={el.picture} style={{ height: "200px", marginRight: "10px" }} alt={"picture not found"} />
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
