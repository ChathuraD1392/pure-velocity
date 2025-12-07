import MotionUpDown from "../_essentials/Motion/MotionUpDown";
import TeamCarousel from "../_essentials/TestCarousel";

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
