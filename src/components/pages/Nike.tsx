import React from "react";
import { Link } from "react-router-dom";
import { ItemType } from "../State";

type Props = {
  state: ItemType[];
};

export const Nike = ({ state }: Props) => {
  return (
    <div>
      <h2>Nike</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {state.map((el, i) => {
          return (
            <Link key={i} to={`/nike/${el.id}`}>
              <img src={el.picture} style={{ height: "200px", marginRight: "10px" }} alt={"picture not found"} />
            </Link>
          );
        })}
      </div>
      <p>
        page3 - be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random
      </p>
    </div>
  );
};
