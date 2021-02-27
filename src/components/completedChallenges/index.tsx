import { useContext } from "react";
import { ChallengesContext } from "../../contexts/challengesContext";
import { StyledCompletedChallenges } from "./style";

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <StyledCompletedChallenges>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </StyledCompletedChallenges>
  );
};
export default CompletedChallenges;
