// import React, { useState } from "react";
// import s from "./hero.module.css";
// import Container from "../container/container";
// import arMob from "../../img/arMob.png";
// import CountdownTimer from "../countdownTimer/countdownTimer.jsx";
// import RegForm from "../form/regForm.jsx";

// const Hero = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleRegisterClick = () => {
//     setShowForm(true);
//   };

//   const handleCloseModal = () => {
//     setShowForm(false);
//   };

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
//           та створюйте таблиці швидко <br />и в задоволення
//         </p>
//         <img
//           className={s.arMob}
//           src={arMob}
//           alt="arrow"
//           width="40"
//           height="40"
//         />
//         <div className={s.countWrap}>
//           <h2 className={s.countTitle}>Реєструйся просто зараз</h2>
//           <CountdownTimer />
//           <button className={s.regBut} onClick={handleRegisterClick}>
//             Зареєструватися
//           </button>
//         </div>
//         {showForm && (
//           <div className={s.modalOverlay}>
//             <div className={s.modalContent}>
//               <button className={s.closeButton} onClick={handleCloseModal}>
//                 &times;
//               </button>
//               <RegForm />
//             </div>
//           </div>
//         )}
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

  const isMobile = window.innerWidth <= 768;

  const handleRegisterClick = () => {
    if (isMobile) {
      setShowModal(true);
    } else {
      setShowRegForm(true);
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
