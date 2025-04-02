import React, { useState, useEffect } from "react";
import s from "./hero.module.css";
import Container from "../container/container";
import arMob from "../../img/arMob.png";
import arTab from "../../img/arTab.png";
import CountdownTimer from "../countdownTimer/countdownTimer.jsx";
import Modal from "../modal/modal.jsx";
import RegForm from "../form/regForm.jsx";
import axios from "axios";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

const API_URL = "https://example.com/register";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRegForm, setShowRegForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRegisterClick = () => {
    if (!isMobile) {
      setShowRegForm(true);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await axios.post(API_URL, values);
      console.log("Форма успішно відправлена!", response.data);
      iziToast.success({
        title: "Успіх",
        message: "Форма успішно відправлена!",
      });
    } catch (error) {
      console.error("Помилка відправлення форми:", error);
      iziToast.error({
        title: "Помилка",
        message: "Помилка відправлення форми!",
      });
    } finally {
      setIsLoading(false);
      setShowRegForm(false);
    }
  };

  return (
    <section className={s.hero}>
      <Container>
        <div className={s.heroWrapper}>
          <div className={s.contentWrap}>
            <h2 className={s.heroSub}>Безоплатний вебінар</h2>
            <h2 className={s.heroSubTwo}>
              Старт: <span className={s.heroSpan}>10 січня 19:30</span>
            </h2>
            <h1 className={s.heroTitle}>
              Навчіться створювати <br />
              Excel-таблиці <br />
              на pro-рівні
            </h1>
            <div className={s.positionWrap}>
              <div className={s.textWrap}>
                <p className={s.heroText}>
                  Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу{" "}
                  <br />
                  та створюйте таблиці швидко <br />и в задоволення
                </p>
              </div>
              <div className={s.imgWrap}>
                <img
                  className={s.arMob}
                  src={arMob}
                  alt="arrow"
                  width="40"
                  height="40"
                />

                <img
                  className={s.arTab}
                  src={arTab}
                  alt="arrow"
                  width="48"
                  height="48"
                />
              </div>
            </div>
          </div>

          <div className={s.formWrap}>
            <h1 className={s.countTitle}>Реєструйся просто зараз</h1>
            <CountdownTimer />
            <RegForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          </div>
        </div>

        <div className={s.countWrap}>
          <h1 className={s.countTitle}>Реєструйся просто зараз</h1>
          <CountdownTimer />
          <button className={s.regBut} onClick={handleRegisterClick}>
            Зареєструватися
          </button>
        </div>
        {showModal && (
          <Modal onClose={handleCloseModal} onSubmit={handleFormSubmit} />
        )}
        {showRegForm && (
          <RegForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        )}
      </Container>
    </section>
  );
};

export default Hero;
