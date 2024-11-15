import React from "react";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Nike } from "./components/pages/Nike";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import { S } from "./components/pages/_styles";
import { Model } from "./components/pages/Model";
import { stateArray } from "./components/State";

export const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  NIKE: "/nike",
  ERROR: "/error",
} as const;

export function App() {
  return (
    <div>
      <S.Header>
        <h1>HEADER</h1>
      </S.Header>
      <S.Body>
        <S.Nav>
          <S.NavWrapper>
            <NavLink to={PATH.ADIDAS}> Adidas </NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PUMA}> Puma </NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.NIKE}> Nike </NavLink>
          </S.NavWrapper>
        </S.Nav>
        <S.Content>
          <Routes>
            <Route path={"/"} element={<Navigate to={PATH.ADIDAS} />} />

            <Route path={PATH.ADIDAS} element={<Adidas state={stateArray.adidas} />} />
            <Route path={PATH.PUMA} element={<Puma state={stateArray.puma} />} />
            <Route path={PATH.NIKE} element={<Nike state={stateArray.nike} />} />
            <Route path={"/:model/:id"} element={<Model />} />

            <Route path={"/*"} element={<Error404 />} />
            {/*<Route path={PATH.ERROR} element={<Error404 />} />*/}
            {/*<Route path={"/*"} element={<Navigate to={PATH.ERROR} />} />*/}
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer> abibas 2024 </S.Footer>
    </div>
  );
}
