import { Timer } from "./Timer.style";

const TimerCoundtown = ({ minutes, seconds }) => {
  return (
    <Timer>
      {minutes}:{seconds}
    </Timer>
  );
};

export default TimerCoundtown;
