import React from "react";
import s from "./hero.module.css";
import Container from "../container/container";
import arMob from "../../img/ar-mob.png";
// import icons from "../../img/icons.svg";

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <h2 className={s.heroSub}>Безоплатний вебінар</h2>
        <h2 className={s.heroSub}>
          Старт: <span className={s.heroSpan}>10 січня 19:30</span>
        </h2>
        <h1 className={s.heroTitle}>
          Навчіться створювати Excel-таблиці на pro-рівні
        </h1>
        <p className={s.heroText}>
          Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу та
          створюйте таблиці швидко і в задоволення
        </p>
        {/* <svg className={s.arrowIcon}>
          <use href={`${icons}#icon-arrow-mob`} />
        </svg> */}
        <img src={arMob} alt="arrow" width="40" height="40" />
      </Container>
    </section>
  );
};

export default Hero;
