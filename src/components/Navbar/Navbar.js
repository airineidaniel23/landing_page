import React from "react";
import styles from "./Navbar.module.css";
import ContactForm from "../ContactForm/ContactForm";

const Navbar = ({ hamActive, setHamActive }) => {
  const logo =
    "logo2.png";
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img src={logo} alt="logo" className={styles.brand}/>
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a href="/" className={`${styles.nav} center`}>
              Despre noi
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Contact
            </a>
          </div>
          <div>
            <select className={styles.dropDown}>
              <option value="RO">RO</option>
              <option value="EN">EN</option>
            </select>

          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
