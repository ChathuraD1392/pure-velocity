import { useContext, type PropsWithChildren } from "react";
import background from "../../assets/images/page_2137_b7a1265fed.svg";
import ThemeContext from "../../StateManagement/contexts/themeContext";

const SectionHeader = ({ children }: PropsWithChildren) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative">
      <section id="contact" className="pt-2 md:pt-5 pl-5 pr-5">
        <div
          className={`max-w-6xl mx-auto mt-8 mb-5 justify-center items-center text-left overflow-hidden ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <img
            src={background}
            alt=""
            className={`absolute w-full h-full object-cover inset-0 stroke-[0.25] ${
              theme === "dark"
                ? "filter invert sepia hue-rotate-180 opacity-3"
                : "opacity-1.5"
            }`}
          />
          {children}
        </div>
      </section>
    </div>
  );
};

export default SectionHeader;
