import { Container, InnerContainer } from "../styles/homeStyle";
import ExperienceBar from "../components/experienceBar";
import Profile from "../components/profile";
import CompletedChallenges from "../components/completedChallenges";
import Countdown from "../components/countdown";
import ChallengeBox from "../components/challengeBox";
import { CountdownProvider } from "../contexts/countdownContext";
import { Head } from "next/document";

const Home = () => {
  return (
    <Container>
      <ExperienceBar />
      <CountdownProvider>
        <InnerContainer>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </InnerContainer>
      </CountdownProvider>
    </Container>
  );
};

export default Home;
