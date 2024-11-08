import React from "react";
import { PageOne } from "./components/pages/PageOne";
import { PageTwo } from "./components/pages/PageTwo";
import { PageThree } from "./components/pages/PageThree";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import { S } from "./components/pages/_styles";

const PATH = {
  ADIDAS: "/page1",
  PUMA: "/page2",
  ABIBAS: "/page3",
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
            <NavLink to={PATH.ABIBAS}> Abibas </NavLink>
          </S.NavWrapper>
        </S.Nav>
        <S.Content>
          <Routes>
            <Route path={"/"} element={<Navigate to={PATH.ADIDAS} />} />

            <Route path={PATH.ADIDAS} element={<PageOne />} />
            <Route path={PATH.PUMA} element={<PageTwo />} />
            <Route path={PATH.ABIBAS} element={<PageThree />} />

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
