import { Container } from "./style";
const Countdown = () => {
  return (
    <Container>
      <div className="timer">
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div className="timer">
        <span>0</span>
        <span>0</span>
      </div>
    </Container>
  );
};
export default Countdown;
