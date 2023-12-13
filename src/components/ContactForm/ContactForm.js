import React from 'react';
import styles from "./Hero.module.css";
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwnwjz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
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
        Phone number
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
        Submit
      </button>
      <br></br>
    </form>
  );
};

export default ContactForm;