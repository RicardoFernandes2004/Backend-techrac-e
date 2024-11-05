import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom


function Main({ goToQuiz }) {
  const slides = [
    { src: '/img/fa97d2e7-02ca-4983-a930-4fdaa245a852 1.png', alt: 'mahindra_car' },
    { src: '/img/8bd68290-c0ad-43b6-a1ce-ee162b7d8914 1.png', alt: 'driver1' },
    { src: '/img/728b2253-b9d4-47dd-9051-e970bff2a62f 1.png', alt: 'driver2' },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const showSlide = (index) => {
    if (index >= slides.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(slideIndex + 1);
  };

  const prevSlide = () => {
    showSlide(slideIndex - 1);
  };
  const HIGHSCORE = localStorage.getItem('highestScore');
  const USER = localStorage.getItem('username')

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(id); // Limpa o intervalo ao desmontar o componente
  }, [slideIndex]);

  const handleRaceClick = (e) => {
    e.preventDefault();
    // Redireciona para o jogo
    window.location.href = `${process.env.PUBLIC_URL}/game/index.html`;
  };

  return (
    <main className='main'>
      {/* Main Hyperlinks Container */}
      <div className="main_hyperlinks_container">
        <h2><a href="#" onClick={handleRaceClick}>Race</a></h2> {/* Redireciona para o jogo */}
        <h2><Link to="/quiz"><a href="#">Quiz</a></Link> </h2>{/* Chama a função goToQuiz ao clicar */}
      </div>

      {/* Info Slider */}
      <div className="info_slider">
        <div className="info_slider_option_container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/h1ovY8oSjDY?si=rxAl2JG2k0-2Xp7S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{zIndex: 10}}></iframe>
        </div>
        <div className="info_slider_images">
          <img className="mahindra_logo" src="/img/LogoMahindra2 1.png" alt="mahindra_logo" style={{visibility: 'hidden'}}/>
          {slides.map((slide, index) => (
            <img
              key={index}
              className={`slide ${index === slideIndex ? 'display_slide' : ''}`}
              src={slide.src}
              alt={slide.alt}
            />
          ))}
        </div>
      </div>

      {/* Ranking Section */}
      <div className="ranking">
        <div className="ranking_title_container">
          <h1>Ranking</h1>
        </div>
        <div className="ranking_outer_rectangle">
          <div className="ranking_inner_rectangle">
            <ul>
              <li>#1 - {USER}: {HIGHSCORE}</li>
              <li>#2 - </li>
              <li>#3 - </li>
              <li>#4 - </li>
              <li>#5 - </li>
              <li>#6 - </li>
              <li>#7 - </li>
              <li>#8 - </li>
              <li>#9 - </li>
              <li>#10 - </li>                
            </ul>
            <p>My Ranking: #1</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
