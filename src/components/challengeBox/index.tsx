import { useContext, useState } from "react";
import { ChallengesContext } from "../../contexts/challengesContext";
import { Container, Inactive, Active } from "./style";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  return (
    <Container>
      {activeChallenge ? (
        <Active>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`resources/icons/${activeChallenge.type}.svg`} alt="" />
            <span className="strong">Novo desafio</span>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className="challenge-failed-button"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className="challenge-succeeded-button"
              onClick={completeChallenge}
            >
              Completei
            </button>
          </footer>
        </Active>
      ) : (
        <Inactive>
          <span className="strong">
            FInalize um ciclo para receber um desafio
          </span>
          <p>
            <img src="resources/icons/level-up.svg" alt="Level up" />
            Avance para o proximo nivel completando desáfios
          </p>
        </Inactive>
      )}
    </Container>
  );
};

export default ChallengeBox;
