import React, { useState, useEffect } from "react";
import s from "./countdownTimer.module.css";

function CountdownTimer() {
  const targetDate = new Date("2025-05-01T00:00:00Z").getTime();
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => {
    if (time <= 0) {
      return "00 Днів : 00 Годин : 00 Хвилин : 00 Секунд";
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return `${String(days).padStart(2, "0")} Днів : ${String(hours).padStart(
      2,
      "0"
    )} Годин : ${String(minutes).padStart(2, "0")} Хвилин : ${String(
      seconds
    ).padStart(2, "0")} Секунд`;
  };

  return (
    <div className={s.countContainer}>
      <h1 className={s.countTitle}>Реєструйся просто зараз</h1>
      <p className={s.countTime}>{formatTime(timeRemaining)}</p>
      <button className={s.regBut}>Зареєструватися</button>
    </div>
  );
}

export default CountdownTimer;
