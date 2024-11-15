import React from "react";
import { useParams } from "react-router-dom";
import { stateArray } from "../State";

export const Model = () => {
  const { model, id } = useParams();
  const currentModel = model ? stateArray[model].find((el) => el.id === Number(id)) : null;

  return (
    <div>
      {currentModel ? (
        <div>
          <h1>{currentModel.model}</h1>
          <h4>{currentModel.collection}</h4>
          <h3>{currentModel.price}</h3>
          <img src={currentModel.picture} alt={currentModel.model} style={{ width: "400px" }} />
        </div>
      ) : (
        <h2>Модель отсутствует</h2>
      )}
    </div>
  );
};
