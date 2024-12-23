import React from "react";
import { Link } from "react-router-dom";
import { ItemType } from "../State";

type Props = {
  state: ItemType[];
};

export const Puma = ({ state }: Props) => {
  return (
    <div>
      <h2>PUMA</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {state.map((el, i) => {
          return (
            <Link key={i} to={`/puma/${el.id}`}>
              <img src={el.picture} style={{ height: "200px", marginRight: "10px" }} alt={"picture not found"} />
            </Link>
          );
        })}
      </div>
      <p>
        page2 - roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
      </p>
    </div>
  );
};
