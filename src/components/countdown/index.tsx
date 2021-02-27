import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../contexts/challengesContext";
import { Container, Button } from "./style";

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  const toggleCountdown = () => {
    setIsActive(!isActive);
    if (isActive) {
      endCicle();
    }
  };
  const endCicle = () => {
    clearTimeout(countdownTimeout);
    setTime(0.1 * 60);
  };
  const count = () => {
    if (time > 0 && isActive) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  };

  useEffect(() => {
    count();
  }, [time, isActive]);

  return (
    <div>
      <Container>
        <div className="timer">
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
        </div>
        <span>:</span>
        <div className="timer">
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </div>
      </Container>
      {hasFinished ? (
        <Button disabled>Ciclo encerrado</Button>
      ) : (
        <Button
          onClick={toggleCountdown}
          type="button"
          className={isActive && "red"}
        >
          {isActive ? "Abandonar ciclo" : "Iniciar ciclo"}
        </Button>
      )}
    </div>
  );
};
export default Countdown;
