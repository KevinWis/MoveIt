import { create } from "domain";
import { createContext, useState, ReactNode, useContext } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };
  const completeChallenge = () => {};

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        activeChallenge,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
