import React from "react";
import Countdown from "react-countdown";
import s from "./countdownTimer.module.css";

function CountdownTimer() {
  const targetDate = new Date("2025-05-01T00:00:00Z").getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const timeParts = [
      { value: days, label: "днів" },
      { value: hours, label: "годин" },
      { value: minutes, label: "хвилин" },
      { value: seconds, label: "секунд", isGreen: true },
    ];

    return (
      <div className={s.timeParts}>
        {timeParts.map((part, index) => (
          <React.Fragment key={index}>
            <div className={s.timeBlock}>
              <span
                className={
                  s.timeNumber + (part.isGreen ? ` ${s.greenNumber}` : "")
                }
              >
                {completed ? "00" : String(part.value).padStart(2, "0")}
              </span>
              <span className={s.timeLabel}>{part.label}</span>
            </div>
            {index < timeParts.length - 1 && <span className={s.dot}>:</span>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className={s.countContainer}>
      <div className={s.countTime}>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
    </div>
  );
}

export default CountdownTimer;
