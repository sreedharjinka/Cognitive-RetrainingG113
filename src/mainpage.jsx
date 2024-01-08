import { createRoot } from "react-dom/client";
// import React from "react";
import "./mainpage.css";
// import MoleGame from "./mole"; // Import the MoleGame component
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
// import Mole from "./mole.html";
import jigsaw from "./images/jigsaw.jpg";
import whackamole from "./images/whackamole.jpg";
import towerblocks from "./images/towerblocks.jpg";
import memory from "./images/memory.jpg";
import sequence from "./images/sequence.jpg";
import bullseye from "./images/bullseye.jpg";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/mole" element={<Mole />} />
    </Routes>
  </BrowserRouter>
);
const gamesData = [
  {
    id: 1,
    name: "Jigsaw Puzzle",
    category: "Problem Solving",
    image: jigsaw,
    htmlFile: "", // Replace with your image path
    // Other game properties or image paths
  },
  {
    id: 2,
    name: "Whack a Mole",
    category: "Attention",
    image: whackamole,
    htmlFile: "mole",
  },
  {
    id: 3,
    name: "Tower Blocks",
    category: "Focus",
    image: towerblocks,
    htmlFile: "",
  },
  {
    id: 4,
    name: "Sweet Memory",
    category: "Memory",
    image: memory,
    htmlFile: "",
  },
  {
    id: 5,
    name: "Sequence",
    category: "Speed",
    image: sequence,
    htmlFile: "",
  },
  {
    id: 6,
    name: "Bullseye",
    category: "Accuracy",
    image: bullseye,
    htmlFile: "",
  },
  // Add other games...
];

// Individual Game Component
function Game() {
  const { id } = useParams();
  const gameId = parseInt(id, 10);
  const game = gamesData.find((game) => game.id === gameId);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h2>{game.name}</h2>
      <p>Description: This is {game.name}</p>
      {/* Render other game details */}
    </div>
  );
}

function App1() {
  return (
    <div className="gameBlocks">
      {/* Other game blocks */}
      <Link to="/mole" className="gameBlock">
        {/* This is the block you want to link to mole.js */}
        <div className="gameImageBlock">{/* Your game image or content */}</div>
        <div className="gameDetails">
          <div className="gameName">Whack a Mole</div>
          <div className="gameCategory">Attention</div>
        </div>
      </Link>
      {/* Other game blocks */}
    </div>
  );
}

function GameFrame() {
  return (
    <div>
      {/* This component will be used for displaying game details */}
      <h2>Game Details</h2>
      {/* Render other game details */}
    </div>
  );
}

export default App1;