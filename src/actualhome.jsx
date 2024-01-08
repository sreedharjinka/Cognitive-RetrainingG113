import Navbar from './Navbar2.0.jsx';
// import './actualhome.css';
// import './new.css'
import { useNavigate } from 'react-router-dom';

const ID = localStorage.getItem('userId');

const App = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/actualhome/game1/${ID}`);  
  };
  const handleButtonClick1 = () => {
    navigate(`/actualhome/hangman/${ID}`);
  };
  const handleButtonClick2 = () => {
    navigate(`/actualhome/typing/${ID}`);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <button className="button" onClick={handleButtonClick}>
          Color Memo
        </button>
        <button className="button1" onClick={handleButtonClick1}>
          Hangman
        </button>
        <button className="button2" onClick={handleButtonClick2}>
          Typing
        </button>
        <div className="text">
          Try out your Brain's power here
        </div>
      </div>
    </>
  );
};
// const styles()

export default App;
