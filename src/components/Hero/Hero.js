import styles from "./Hero.module.css";
import ContactForm from "../ContactForm/ContactForm";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Punem satul pe satelit
        </h2>
        <div className={styles.slogan}>
          <p>Vezi cum arată ferma ta din spațiu</p>
        </div>
        <div className={styles.inputLocation}>
          <input type="text" placeholder="Localitate" />
          <a href="#contactform" className={`${styles.arrow} fas fa-arrow-right`}></a>
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
