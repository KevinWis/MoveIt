import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./challengesContext";

interface contextCountdownData {
  time: number;
  isActive: boolean;
  hasFinished: boolean;
  toggleCountdown: () => void;
  endCicle: () => void;
}
interface contextCountdownProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as contextCountdownData);

let countdownTimeout: NodeJS.Timeout;

const { startNewChallenge } = useContext(ChallengesContext);
const [time, setTime] = useState(0.1 * 60);
const [isActive, setIsActive] = useState(false);
const [hasFinished, setHasFinished] = useState(false);

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
    startNewChallenge();
  }
};

useEffect(() => {
  count();
}, [time, isActive]);

export const CountdownProvider = ({ children }: contextCountdownProps) => {
  return (
    <CountdownContext.Provider
      value={{
        time,
        isActive,
        hasFinished,
        toggleCountdown,
        endCicle,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
