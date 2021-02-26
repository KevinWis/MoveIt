import { Container, InnerContainer } from "../styles/homeStyle";
import ExperienceBar from "../components/experienceBar";
import Profile from "../components/profile";
const Home = () => {
  return (
    <Container>
      <ExperienceBar />
      <InnerContainer>
        <div>
          <Profile />
        </div>
        <div></div>
      </InnerContainer>
    </Container>
  );
};

export default Home;
