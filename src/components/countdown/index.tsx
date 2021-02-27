import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../contexts/countdownContext";
import { Container, Button } from "./style";

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { hasFinished, isActive, time, toggleCountdown } = useContext(
    CountdownContext
  );

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

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
