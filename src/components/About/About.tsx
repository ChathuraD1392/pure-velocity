import { aboutData } from "../../assets/data/aboutData";
import backgroundImage from "../../assets/images/Model3Standard_88.jpg";
import ImageHeader from "../_essentials/ImageHeader";
import SectionHeader from "../_essentials/SectionHeader";
import MotionUpDown from "../_essentials/Motion/MotionUpDown";
import ScrollingOneSide from "../_essentials/Scrolling/ScrollingOneSide";
import AboutContainer from "./AboutContainer";

const About = () => {
  return (
    <>
      <ImageHeader
        backgroundImage={backgroundImage}
        title="About"
        text={<>Pure Velocity - Sri Lanka’s Home of Tesla Expertise</>}
      />
      <SectionHeader>
        <MotionUpDown initialY="100vh" delay={1} duration={1}>
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 md:text-left">
            Sri Lanka’s Home of Tesla Expertise
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold mt-5 mb-5">
            Pure Velocity began with a simple idea to bring world-class Tesla
            servicing to Sri Lanka.
          </h3>
          <p className="text-md md:text-lg font-light mt-2">
            Founded by <b className="font-semibold">Shanil</b> and{" "}
            <b className="font-semibold">Dilin</b> — two entrepreneurs, tech
            lovers, and unapologetic car addicts — PV has grown into a
            full-service Tesla workshop backed by global experience.
          </p>

          <p className="text-md md:text-lg font-light mt-2">
            With <b className="font-semibold">Sanjeev</b> leading operations on
            the ground, <b className="font-semibold">Dinesh</b> maintaining
            standards and finances with military precision, and Rukshan powering
            customer support and admin, PV runs like a perfectly balanced EV
            drivetrain.
          </p>
          <p className="text-md md:text-lg font-light mt-2">
            Our team is trained in advanced diagnostics, HV systems, battery
            troubleshooting, and software-level repair workflows used
            internationally.
          </p>
        </MotionUpDown>
        <ScrollingOneSide y={100} duration={1}>
          {aboutData.map((about, index) => (
            <AboutContainer about={about} key={index} />
          ))}
        </ScrollingOneSide>
      </SectionHeader>
    </>
  );
};

export default About;
