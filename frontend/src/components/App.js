import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa os componentes necessários do react-router-dom
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Problem from './Problem';
import Solution from './Solution';
import Reason from './Reason';
import Profile from './Profile';
import Coins from './Coins';
import Login from './LoginScreen';
import Quiz from './Quiz';
import Guess from './Guess'; 
import styles from '../styles/footer_breakpoint_quiz.module.css'; // Importa o CSS Module
import '../styles/global.css';
import '../styles/styles.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');

  const toggleProfile = () => setShowProfile(!showProfile);
  const handleLogin = () => setIsLoggedIn(true);
  const goToQuiz = () => setCurrentPage('quiz');
  const goToMain = () => setCurrentPage('main');

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="containerAll">
        {showCoins && <Coins />}
        {showProfile && <Profile toggleProfile={toggleProfile} />}

        <Header toggleProfile={toggleProfile} setShowCoins={setShowCoins} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main goToQuiz={goToQuiz} />
                <Problem />
                <Solution />
                <Reason />
                <Footer />
              </>
            }
          />
          <Route
            path="/quiz"
            element={
              <>
                <Quiz goToMain={goToMain} />
                <Footer className={styles.footerQuiz} />
              </>
            }
          />
          <Route
            path="/guess"
            element={<Guess />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
