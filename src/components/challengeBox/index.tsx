import { useState } from "react";
import { Container, Inactive, Active } from "./style";

const ChallengeBox = () => {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);
  return (
    <Container>
      {hasActiveChallenge ? (
        <Active>
          <header>Ganhe 400 XP</header>
          <main>
            <img src="resources/icons/body.svg" alt="" />
            <span className="strong">Novo desafio</span>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <button type="button" className="challenge-failed-button">
              Falhei
            </button>
            <button type="button" className="challenge-succeeded-button">
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
