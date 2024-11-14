import React from "react";
import { useParams } from "react-router-dom";
import { adidasArr } from "./Adidas";

type Props = {};
export const Model = (props: Props) => {
  const params = useParams();
  const paramsId = Number(params.id);
  const model = adidasArr.find((el) => el.id === paramsId);
  return (
    <div>
      {model ? (
        <div>
          <h1>{model.model}</h1>
          <img src={model.picture} alt="ricture not found" style={{ width: "400px" }} />
        </div>
      ) : (
        <h1>Модель отсутствует</h1>
      )}
    </div>
  );
};
