import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom

function Footer() {
  return (
    <footer>
      <section className="footer_container">
        <div className="social_media_container">
          <div className="footer_frame">
            <h2>Follow Us</h2>
            <div className="footer_img_container">
              <a href="#"><img src="/img/Instagram_icon 1.png" alt="Instagram" /></a>
              <a href="#"><img id="x" src="/img/twitter_x_new_logo_square_x_icon_256075 1.png" alt="Twitter" /></a>
              <a href="#"><img src="/img/facebook_plain_logo_icon_146525 1.png" alt="Facebook" /></a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>© 2024 TECHRAC-E Holdings Ltd. All rights reserved.</p>
        </div>
        <div className="quicklinks_container">
          <div className="footer_frame">
            <h2>Quick Links:</h2>
            <ul>
              <li><a href="https://www.fiaformulae.com/pt-br/teams">Teams</a></li>
              <li><a href="https://www.fiaformulae.com/pt-br/drivers">Drivers</a></li>
              <li><a href="https://www.fiaformulae.com/pt-br/championship/rules-and-regulations">Rules & Regulations</a></li>
              <li><a href="https://www.fiaformulae.com/pt-br/partners">Partners</a></li>
              <li><a href="https://mediacentre.fiaformulae.com">Media</a></li>
              {/* Substitui o link estático por um Link do React Router */}
              <li><Link to="/Guess">Prediction</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
