import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

import TimerCoundtown from "../components/Timer/TimerCountdown";
import {
  App,
  TimerWrapper,
  ButtonContainer,
  StartButtonContainer,
  Instructions,
} from "../components/Containers/Containers.style";
import { TimerButton, Start } from "../components/Buttons/Button.style";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const [timer, setTimer] = useState(false);
  const [key, setKey] = useState(0);
  const [duration, setDuration] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTimer = () => {
    setTimer(true);
    setKey((prevKey) => prevKey + 1);
    if (duration === null) {
      setDuration(0);
    } else {
      setTimeout(() => {
        toggleModal(duration);
      }, convertTimers(duration));
    }
  };

  const convertTimers = (timeSet) => {
    return timeSet * 1000;
  };

  const setTimeDuration = (timeDuration) => {
    if (timeDuration === 2) {
      setDuration(120);
    } else if (timeDuration === 3) {
      setDuration(180);
    } else {
      setDuration(300);
    }
  };

  const toggleModal = (time) => {
    setShowModal((prev) => !prev);
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <TimerCoundtown minutes={"00"} seconds={"00"} />;
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    if (seconds <= 9) {
      return (
        <TimerCoundtown
          minutes={minutes}
          seconds={"0" + (remainingTime % 60)}
        />
      );
    }

    return <TimerCoundtown minutes={minutes} seconds={seconds} />;
  };

  return (
    <App>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <TimerWrapper>
        <CountdownCircleTimer
          key={key}
          isPlaying={timer}
          duration={duration}
          colors={["#ffffff"]}
          trailColor={"#86C1F0"}
          size={220}
          strokeWidth={12}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </TimerWrapper>
      <Instructions>
        <p>
          Tire uma pausa de toda a correria do dia-a-dia e aprecie um tempo para
          acalmar a mente.
        </p>
      </Instructions>

      <ButtonContainer>
        <TimerButton onClick={() => setTimeDuration(2)}>
          2<br />
          min
        </TimerButton>
        <TimerButton onClick={() => setTimeDuration(3)}>
          3<br />
          min
        </TimerButton>
        <TimerButton onClick={() => setTimeDuration(5)}>
          5<br />
          min
        </TimerButton>
      </ButtonContainer>

      <StartButtonContainer>
        <Start onClick={handleTimer}>Iniciar</Start>
      </StartButtonContainer>
    </App>
  );
};

export default Home;
