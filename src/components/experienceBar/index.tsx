import { Header, CurrentXp, CurrentXpBar } from "./style";

const ExperienceBar = () => {
  return (
    <Header>
      <span>0 xp</span>
      <div>
        <CurrentXpBar charge={50} />
        <CurrentXp offsetX={50}>300xp</CurrentXp>
      </div>
      <span>600 xp</span>
    </Header>
  );
};

export default ExperienceBar;
