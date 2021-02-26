import { Container, InnerContainer } from "../styles/homeStyle";
import ExperienceBar from "../components/experienceBar";
import Profile from "../components/profile";
import CompletedChallenges from "../components/completedChallenges";
import Countdown from "../components/countdown";
const Home = () => {
  return (
    <Container>
      <ExperienceBar />
      <InnerContainer>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </InnerContainer>
    </Container>
  );
};

export default Home;
