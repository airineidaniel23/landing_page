import styles from "./Hero.module.css";
import ContactForm from "../ContactForm/ContactForm";
import React from 'react';

import { useNavigate } from 'react-router-dom'; 
const Hero = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const goToHeatmap = () => {
    navigate('/ndvi');
  };
  
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Punem satul pe satelit
        </h2>
        <div className={styles.slogan}>
          <p>Vezi cum arată ferma ta din spațiu</p>
        </div>
        <div onClick={goToHeatmap} className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Localitate" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="/background.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
