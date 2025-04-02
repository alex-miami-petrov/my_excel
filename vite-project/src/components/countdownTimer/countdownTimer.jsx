// import React from "react";
// import Countdown from "react-countdown";
// import s from "./countdownTimer.module.css";

// function CountdownTimer() {
//   const targetDate = new Date("2025-05-01T00:00:00Z").getTime();

//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//       return (
//         <div className={s.timeParts}>
//           <div className={s.timeBlock}>
//             <span className={s.timeNumber}>00</span>
//             <span className={s.timeLabel}>днів</span>
//           </div>
//           <span className={s.separator}>:</span>
//           <div className={s.timeBlock}>
//             <span className={s.timeNumber}>00</span>
//             <span className={s.timeLabel}>годин</span>
//           </div>
//           <span className={s.separator}>:</span>
//           <div className={s.timeBlock}>
//             <span className={s.timeNumber}>00</span>
//             <span className={s.timeLabel}>хвилин</span>
//           </div>
//           <span className={s.separator}>:</span>
//           <div className={s.timeBlock}>
//             <span className={`${s.timeNumber} ${s.greenNumber}`}>00</span>
//             <span className={s.timeLabel}>секунд</span>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className={s.timeParts}>
//           <div className={s.timeBlock}>
//             <span className={s.timeNumber}>
//               {String(days).padStart(2, "0")}
//             </span>
//             <span className={s.timeLabel}>днів</span>
//           </div>
//           <span className={s.separator}>:</span>
//           <div className={s.timeBlock}>
//             <span className={s.timeNumber}>
//               {String(hours).padStart(2, "0")}
//             </span>
//             <span className={s.timeLabel}>годин</span>
//           </div>
//           <span className={s.separator}>:</span>
//           <div className={s.timeBlock}>
//             <span className={s.timeNumber}>
//               {String(minutes).padStart(2, "0")}
//             </span>
//             <span className={s.timeLabel}>хвилин</span>
//           </div>
//           <span className={s.separator}>:</span>
//           <div className={s.timeBlock}>
//             <span className={`${s.timeNumber} ${s.greenNumber}`}>
//               {String(seconds).padStart(2, "0")}
//             </span>
//             <span className={s.timeLabel}>секунд</span>
//           </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className={s.countContainer}>
//       <h1 className={s.countTitle}>Реєструйся просто зараз</h1>
//       <div className={s.countTime}>
//         <Countdown date={targetDate} renderer={renderer} />
//       </div>
//       <button className={s.regBut}>Зареєструватися</button>
//     </div>
//   );
// }

// export default CountdownTimer;

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
      <h1 className={s.countTitle}>Реєструйся просто зараз</h1>
      <div className={s.countTime}>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
      <button className={s.regBut}>Зареєструватися</button>
    </div>
  );
}

export default CountdownTimer;
