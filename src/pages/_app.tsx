import "../styles/global.css";
import { ChallengesProvider } from "../contexts/challengesContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
};

export default MyApp;
