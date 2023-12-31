import PaginaInicial from "./Components/pagina-inicial.component";
import useModos from "./Components/modos.component";
import React from "react";
import PaginaJogo from "./Components/pagina-jogo-components/pagina-jogo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import "./estilos/style.css";
import "./estilos/sopaLetras.css";

function WordSearch() {
  const [listOfWords, setListOfWords] = useState([
    "react",
    "javascript",
    "angular",
    "html",
    "css",
    "bootstrap",
    "estudante",
    "vue",
    "programaçao",
    "linguagens",
    "assembly",
    "ember",
    "backbone",
    "fantasma",
    "computador",
  ]);

  const [newList, setNewList] = useState([]);

  const { render, rowsColumns, numberOfWords, timer, isClicked } = useModos({
    listOfWords,
    setNewList,
    setListOfWords,
  });
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <PaginaInicial className="pagina-inicial" />
          </Route>
          <Route path="/modos">{render}</Route>
          <Route path="/Sopa-Letras">
            <PaginaJogo
              {...{
                rowsColumns,
                numberOfWords,
                timer,
                isClicked,
                newList,
                setNewList,
              }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default WordSearch;

// SELECIONAR A PALAVRA ARRASTANDO (react onDrag events)