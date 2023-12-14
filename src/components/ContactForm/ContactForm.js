import React from 'react';
import styles from "./Hero.module.css";
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwnwjz");
  if (state.succeeded) {
      return <p>Mulțumim că te-ai alăturat!</p>;
  }
  return (
    <form id="contactform" onSubmit={handleSubmit}>
      <label htmlFor="email">
        E-mail
      </label>
      
      <div className={styles.inputLocation}>
        <i className="fas"> </i>
        <input className="fas fa-map-marker-alt"
          id="email"
          type="email" 
          name="email"
        />
        <i className="fas"> </i>
      </div>
      <br></br>
      <ValidationError
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <label htmlFor="message">
        Telefon
      </label>

      <div className={styles.inputLocation}>
        <i className="fas"> </i>
        <input className="fas fa-map-marker-alt"
          id="message"
          name="message"
        />
        <i className="fas"></i>
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br></br>
      <button type="submit" disabled={state.submitting} className={styles.signup}>
        Fii la curent
      </button>
      <br></br>
    </form>
  );
};

export default ContactForm;