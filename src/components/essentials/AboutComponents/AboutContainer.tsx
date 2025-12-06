import { useContext } from "react";
import type { AboutType } from "../../../assets/data/aboutData";
import ThemeContext from "../../../StateManagement/contexts/themeContext";

interface Props {
  about: AboutType;
}

const AboutContainer = ({ about }: Props) => {
  const { theme } = useContext(ThemeContext);
  const isEven = about.index % 2 === 0;
  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 items-center mt-5 mb-3 max-w-7xl ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {/* IMAGE */}
        <div
          className={`order-1 ${
            !isEven ? "md:order-1" : "md:order-2"
          } mt-3 mb-3 w-full h-full flex justify-center items-center`}
        >
          <img
            src={about.image}
            alt={about.title_1}
            className="rounded-lg max-w-full max-h-full object-contain"
          />
        </div>

        {/* TEXT */}
        <div
          className={`order-2 ${
            !isEven ? "md:order-2" : "md:order-1"
          } mt-3 mb-3`}
        >
          <p className="pt-2 pb-2 font-semibold text-2xl rounded-lg p-1 pl-3">
            {about.title_1}
          </p>

          <p className="pt-2 pb-2 pl-3 mb-5 font-normal text-md">
            {about.para}
          </p>

          <p className="pt-2 pb-2 font-semibold text-2xl rounded-lg p-1 pl-3">
            {about.title_2}
          </p>

          <ul className="pt-2 pb-2 font-semibold text-md gap-5 p-1 pl-5">
            {about.list?.map((i) => (
              <li key={i.label} className="mb-2">
                {i.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
