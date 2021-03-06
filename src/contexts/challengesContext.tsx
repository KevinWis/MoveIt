import Cookies from "js-cookie";
import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from "../../challenges.json";
import LevelUpModal from "../components/levelUpModal";

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
  closeLevelUpModal: () => void;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesProvider = ({
  children,
  ...rest
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
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
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};
