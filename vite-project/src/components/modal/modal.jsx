import React from "react";
import s from "./modal.module.css";
import Container from "../container/container";
import logo from "../../img/logo.png";
import x from "../../img/x.png";
import CountdownTimer from "../countdownTimer/countdownTimer.jsx";
import RegForm from "../form/regForm.jsx";

const Modal = ({ onClose }) => {
  return (
    <div className={s.modalOverlay}>
      <Container>
        <div className={s.modalContent}>
          <div className={s.modalHead}>
            <img src={logo} alt="logo" width="100" height="30" />
            <button className={s.closeButton} onClick={onClose}>
              <img src={x} alt="close" width="32" height="32" />
            </button>
          </div>
          <h2 className={s.countTitle}>Реєструйся просто зараз</h2>
          <CountdownTimer />
          <RegForm />
        </div>
      </Container>
    </div>
  );
};

export default Modal;
