import { create } from "domain";
import { createContext, useState, ReactNode, useContext } from "react";
import challenges from "../../challenges.json";
import CompletedChallenges from "../components/completedChallenges";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
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

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };
  const completeChallenge = () => {
    setChallengesCompleted(challengesCompleted + 1);

    if (currentExperience + activeChallenge.amount >= experienceToNextLevel) {
      setCurrentExperience(
        currentExperience + activeChallenge.amount - experienceToNextLevel
      );
      levelUp();
    } else {
      setCurrentExperience(currentExperience + activeChallenge.amount);
    }
    resetChallenge();
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    new Audio("/resources/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio!", {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
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
        experienceToNextLevel,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
