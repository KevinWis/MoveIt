import { useEffect, useState } from "react";
import { Container, Button } from "./style";
const Countdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padEnd(2, "0");

  const toggleCountdown = () => {
    setActive(!active);
  };
  const count = () => {
    if (time > 0 && active) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  };

  useEffect(() => {
    count();
  }, [time, active]);

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
      <Button onClick={toggleCountdown} type="button">
        Iniciar
      </Button>
    </div>
  );
};
export default Countdown;
