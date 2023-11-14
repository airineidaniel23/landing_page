import styles from "./Hero.module.css";

const Hero = () => {
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
        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your farm location" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
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
