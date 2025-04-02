// import React from "react";
// import s from "./hero.module.css";
// import Container from "../container/container";
// import arMob from "../../img/arMob.png";
// import CountdownTimer from "../countdownTimer/countdownTimer.jsx";
// // import icons from "../../img/icons.svg";

// const Hero = () => {
//   return (
//     <section className={s.hero}>
//       <Container>
//         <h2 className={s.heroSub}>Безоплатний вебінар</h2>
//         <h2 className={s.heroSub}>
//           Старт: <span className={s.heroSpan}>10 січня 19:30</span>
//         </h2>
//         <h1 className={s.heroTitle}>
//           Навчіться створювати <br />
//           Excel-таблиці <br />
//           на pro-рівні
//         </h1>
//         <p className={s.heroText}>
//           Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу <br />
//           та створюйте таблиці швидко <br />і в задоволення
//         </p>

//         <img
//           className={s.arMob}
//           src={arMob}
//           alt="arrow"
//           width="40"
//           height="40"
//         />
//         <div className={s.countWrap}>
//           <h1 className={s.countTitle}>Реєструйся просто зараз</h1>
//           <CountdownTimer />
//           <button className={s.regBut}>Зареєструватися</button>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import s from "./hero.module.css";
import Container from "../container/container";
import arMob from "../../img/arMob.png";
import CountdownTimer from "../countdownTimer/countdownTimer.jsx";
import RegForm from "../form/regForm.jsx";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  return (
    <section className={s.hero}>
      <Container>
        <h2 className={s.heroSub}>Безоплатний вебінар</h2>
        <h2 className={s.heroSub}>
          Старт: <span className={s.heroSpan}>10 січня 19:30</span>
        </h2>
        <h1 className={s.heroTitle}>
          Навчіться створювати <br />
          Excel-таблиці <br />
          на pro-рівні
        </h1>
        <p className={s.heroText}>
          Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу <br />
          та створюйте таблиці швидко <br />и в задоволення
        </p>
        <img
          className={s.arMob}
          src={arMob}
          alt="arrow"
          width="40"
          height="40"
        />
        <div className={s.countWrap}>
          <h1 className={s.countTitle}>Реєструйся просто зараз</h1>
          <CountdownTimer />
          <button className={s.regBut} onClick={handleRegisterClick}>
            Зареєструватися
          </button>
        </div>
        {showForm && <RegForm />}{" "}
      </Container>
    </section>
  );
};

export default Hero;
