import styles from "./Hero.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import React from 'react';

const Hero = () => {
  const navigate = useNavigate(); // Create an instance of useNavigate

  // Function to handle button click
  const goToHeatmap = () => {
    navigate('/ndvi');
  };
  return (
    <div className={`${styles.heroWrapper} center`}>
      <select className={styles.dropDown}>
        <option value="EN">EN</option>
        <option value="RO">RO</option>
      </select>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Monitor your farm today
        </h2>
        <div className={styles.slogan}>
          <p>See how your farm looks from space:</p>
        </div>
        <div onClick={goToHeatmap} className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Click here to add cordinates" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
        <br></br>
        <h3 className={styles.slogan}>
          <p>Sign up for updates:</p>
        </h3>
        <ContactForm />
        <br></br>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://s3.amazonaws.com/content.satimagingcorp.com/static/galleryimages/NDVI-Vegetation-Index-Soil-Moisture-2021.gif"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
