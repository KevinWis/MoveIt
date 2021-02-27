import { create } from "domain";
import { createContext, useState, ReactNode } from "react";

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    console.log("newChallenge");
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
