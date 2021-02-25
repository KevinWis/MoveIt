import { StyledProfile, Image, Name, Level } from "./style";
const Profile = () => {
  return (
    <StyledProfile>
      <Image src="https://picsum.photos/id/1/200/300" />
      <div>
        <Name>Kevin Wischneski</Name>
        <Level>
          <img src="resources/icons/level.svg" alt="level" /> Level 1
        </Level>
      </div>
    </StyledProfile>
  );
};
export default Profile;
