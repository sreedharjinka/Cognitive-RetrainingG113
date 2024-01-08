import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './Acontext';
import Login from './login';
import Home from './home';
import Profile from './profile';
import ForgotPassword from './forgotPassword';
import About from './about';
import Others from './actualhome';
import ProfileUpdate from './UpdateProfile';
// import Sidebar from './sidebar';
import Appp from './game1';
import ScorePage from './stats';
import QuizPage from './QuizPage';
import Reports from './reports';
import Hangman from './src_hang/hangman';
// import Keyboard from './src_hang/Keyboard';
import Typing from './src_typing/typing';
// import WordSearch from './src_wordsearch/WordSearch';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App(){
root.render(
  <BrowserRouter>
    {/* <AuthProvider> */}
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:ID" element={<Profile />} />
        <Route path="/profile/:ID/UpdateProfile" element={<ProfileUpdate />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/actualhome/:ID" element={<Others />} />
        <Route path="/actualhome/game1/:ID" element={<Appp />} />
        <Route path="/stats/:ID" element={<ScorePage />} />
        <Route path="/Reports/:ID" element={<Reports />} />
        <Route path="/Reports/QuizPage/:ID" element={<QuizPage />}/>
        <Route path="/actualhome/hangman/:ID" element={<Hangman />} />
        <Route path="/actualhome/typing/:ID" element={<Typing />} />
        {/* <Route path="/wordsearch" element={<WordSearch />} /> */}
        {/* <Route path="/typing" element={<Typing />} /> */}


     </Routes>
    {/* </AuthProvider> */}
  </BrowserRouter>
);
}
export default App;