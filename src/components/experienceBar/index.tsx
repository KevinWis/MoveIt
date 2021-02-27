import { useContext } from "react";
import { ChallengesContext } from "../../contexts/challengesContext";
import { Header, CurrentXp, CurrentXpBar } from "./style";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <Header>
      <span>0 xp</span>
      <div>
        <CurrentXpBar charge={percentToNextLevel} />
        <CurrentXp offsetX={percentToNextLevel}>
          {currentExperience}xp
        </CurrentXp>
      </div>
      <span>{experienceToNextLevel}</span>
    </Header>
  );
};

export default ExperienceBar;
