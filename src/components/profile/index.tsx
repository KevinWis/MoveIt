import { useContext } from "react";
import { ChallengesContext } from "../../contexts/challengesContext";
import { StyledProfile, Image, Name, Level } from "./style";
const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <StyledProfile>
      <Image src="https://github.com/KevinWis.png" />
      <div>
        <Name>Kevin Wischneski</Name>
        <Level>
          <img src="resources/icons/level.svg" alt="level" /> Level {level}
        </Level>
      </div>
    </StyledProfile>
  );
};
export default Profile;
