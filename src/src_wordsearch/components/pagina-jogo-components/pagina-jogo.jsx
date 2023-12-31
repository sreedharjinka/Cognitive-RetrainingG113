import { React, useState , useEffect } from "react";
import { Link } from "react-router-dom";
import TimerAndPoints from "./timerAndPoints";
import GameWords from "./gameWords";
import Canvas from "./canvas";
import ModoJogo from "./modoJogo";
import JogarNovamente from "./jogarNovamente";
import "../../estilos/styles.css";

// import PropTypes from 'prop-types';

export default function Modoogo({ mode }) {
  const [gameMode, setGameMode] = useState(null);

  useEffect(() => {
    convertToMode();
  });

  const convertToMode = () => {
    switch (mode) {
      case "simp": // modo simples
        setGameMode("Simples");
        break;
      case "inter":
        setGameMode("Intermédio");
        break;
      case "avan":
        setGameMode("Avançado");
        break;
    }
  };

  return (
    <div className="game-mode">
      <span className="span-text-mode">{gameMode}</span>
    </div>
  );
}
export default function SopaLetras({
  rowsColumns,
  numberOfWords,
  timer,
  isClicked,
  newList,
  setNewList,
}) {
  const [StartGame, setStartGame] = useState(false);
  const [currentWordsCompleted, setCurrentWordsCompleted] = useState([]);
  const [currentTime, setCurrentTime] = useState(timer);
  const [gameEnded, setGameEnded] = useState(false);
  const [vencedor, setVencedor] = useState(null);
  const mode = isClicked;
  if (
    (currentTime == 0 || currentWordsCompleted.length == numberOfWords) &&
    !gameEnded
  ) {
    if (currentTime == 0) setVencedor("Perdeste !");
    else if (currentWordsCompleted.length == numberOfWords)
      setVencedor("Ganhaste !");

    setGameEnded(true);
  }

  return (
    <>
      <div className="max-width">
        <div className="pagina-jogo-principal">
          <ModoJogo mode={mode} />
          <TimerAndPoints
            timer={timer}
            setStartGame={setStartGame}
            newList={newList}
            mode={mode}
            currentWordsCompleted={currentWordsCompleted}
            setCurrentTime={setCurrentTime}
            gameEnded={gameEnded}
          />
          <Link to="/modos" className="voltar">
            {" "}
            afasdfafl
          </Link>
          <Canvas
            rowsColumns={rowsColumns}
            newList={newList}
            startGame={StartGame}
            setNewList={setNewList}
            setCurrentWordsCompleted={setCurrentWordsCompleted}
            mode={mode}
          />
          <GameWords
            newList={newList}
            numberOfWords={numberOfWords}
            mode={mode}
          />
          {gameEnded ? (
            <JogarNovamente vencedor={vencedor} mode={mode} />
          ) : null}
        </div>
      </div>
    </>
  );
}