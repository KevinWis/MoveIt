import { useContext } from "react";
import { ChallengesContext } from "../../contexts/challengesContext";
import CompletedChallenges from "../completedChallenges";
import { Overlay, Container } from "./style";

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong className="strong">Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <button onClick={closeLevelUpModal} type="button">
          <img src="resources/icons/close.svg" alt="Fechar" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
