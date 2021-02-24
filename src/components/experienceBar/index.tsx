import { Header } from "./style";

const ExperienceBar = () => {
  return (
    <Header>
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className="current-xp" style={{ left: "50%" }}>
          300xp
        </span>
      </div>
      <span>600 xp</span>
    </Header>
  );
};

export default ExperienceBar;
