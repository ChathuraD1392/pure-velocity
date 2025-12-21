import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import MotionUpDown from "./Motion/MotionUpDown";

const Breadcrums = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = decodeURI(location.pathname)
    .split("/")
    .filter((x) => x);
  console.log(pathnames);

  const isLast = pathnames.length - 1;

  return (
    <>
      <MotionUpDown initialY="100vh" delay={1} duration={1}>
        <span className="text-[12px] mt-8 pb-1 flex items-center justify-items-start pl-62.5">
          {pathnames.map((path, index) => {
            const routeTo = path === "services" ? "/services" : "";
            return (
              <li
                key={index}
                onClick={() => navigate(routeTo)}
                className="list-none"
              >
                <p
                  className={`${
                    isLast === index
                      ? "text-blue-500"
                      : "hover:underline hover:underline-offset-1 cursor-pointer"
                  } font-semibold inline-flex items-center `}
                >
                  <IoIosArrowForward className="font-semibold mr-1 ml-1" />
                  {path.toUpperCase()}
                </p>
              </li>
            );
          })}
        </span>
      </MotionUpDown>
    </>
  );
};

export default Breadcrums;
