import { Container, InnerContainer } from "../styles/homeStyle";
import ExperienceBar from "../components/experienceBar";
import Profile from "../components/profile";
import CompletedChallenges from "../components/completedChallenges";
import Countdown from "../components/countdown";
import ChallengeBox from "../components/challengeBox";
import { CountdownProvider } from "../contexts/countdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/challengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = (props: HomeProps) => {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  const userInfo = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
  };
  return {
    props: userInfo,
  };
};
