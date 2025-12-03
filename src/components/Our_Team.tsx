import MotionUpDown from "./Motion/MotionUpDown";
import TeamCarousel from "./Test";

const Our_Team = () => {
  return (
    <>
      <MotionUpDown initialY="-20vh" delay={0.5} duration={1}>
        <TeamCarousel />
      </MotionUpDown>
    </>
  );
};

export default Our_Team;
