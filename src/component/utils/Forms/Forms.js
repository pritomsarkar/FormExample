import React, { useState } from "react";
import styles from "./Forms.module.css";

function Forms() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneInitial, setPhoneInitial] = useState("+91");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSendUpdate, setIsSendUpdate] = useState(false);
  const [isVisable, setIsVisable] = useState(false);

  const resetForm = () => {
    setFirstName("");
    setLasttName("");
    setEmail("");
    setPhoneInitial("+91");
    setPhone("");
    setIsSendUpdate(false);
    setIsVisable(false);
    setMessage("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      message,
      isSendUpdate,
      phone: `${phoneInitial}-${phone}`,
    };
    console.log(formData);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler}>
        <div className={styles.formRow}>
          <div className={styles.name}>
            <label className={styles.inputLabel}>First Name<sup>*</sup></label>
            <input
              type="text"
              value={firstName}
              placeholder="Enter your First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className={styles.name}>
            <label className={styles.inputLabel}>Last Name<sup>*</sup></label>
            <input
              type="text"
              value={lastName}
              placeholder="Enter your Last Name"
              onChange={(e) => {
                setLasttName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.email}>
            <label className={styles.inputLabel}>Email<sup>*</sup></label>
            <input
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.phoneNumber}>
            <label className={styles.inputLabel}>Phone Number<sup>*</sup></label>
            <div className={styles.phoneContainer}>
              <div className={styles.phoneInitial}>
                <select
                  value={phoneInitial}
                  onChange={(e) => setPhoneInitial(e.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+129">+129</option>
                  <option value="+23">+23</option>
                </select>
              </div>
              <input
                value={phone}
                placeholder="Enter your Phone Number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <p className={styles.message}>Your Message (Optional)</p>
          <p
            className={styles.addMsgBtn}
            onClick={() => {
              setIsVisable(!isVisable);
            }}
          >
            {isVisable ? "-" : "+"}
          </p>
        </div>
        {isVisable && (
          <div className={styles.formRow}>
            <textarea
              value={message}
              className={styles.messageText}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        )}

        <div className={styles.updateWP}>
          <input
            value={isSendUpdate}
            className={styles.updateCheck}
            type="checkbox"
            checked={isSendUpdate}
            onClick={() => setIsSendUpdate(!isSendUpdate)}
          />
          <p className={styles.updateMessage}>
            I want to receive updates directly on WhatsApp.
          </p>
        </div>
        <div className={styles.buttonArea}>
          <button type="submit" className={styles.submitBtn}>
            Talk To Us
          </button>
          <button
            type="button"
            className={styles.submitBtn}
            style={{ backgroundColor: "#ff4f4f" }}
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
