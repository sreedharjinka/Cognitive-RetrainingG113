import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function JogarNovamente({ vencedor }) {
  const vencedorRef = useRef();

  useEffect(() => {
    switch (vencedor) {
      case "Ganhaste !":
        vencedorRef.current.style.color = "green";
        break;
      case "Perdeste !":
        vencedorRef.current.style.color = "crimson";
    }
  }, []);

  return (
    <>
      <Link to="/modos" className="jogar-novamente">
        Jogar Novamente
      </Link>
      <span className="vencedor" ref={vencedorRef}>
        {vencedor}
      </span>
    </>
  );
}JogarNovamente.propTypes = {
  vencedor: PropTypes.oneOf(['Ganhaste !', 'Perdeste !']).isRequired,
};