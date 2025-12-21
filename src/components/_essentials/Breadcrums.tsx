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
        <div className="w-full max-w-6xl mx-auto">
          <span className="lg:flex hidden items-center text-left text-[12px] mt-8 pb-1">
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
                        : "hover:underline hover:underline-offset-3 cursor-pointer"
                    } font-semibold inline-flex items-center `}
                  >
                    <IoIosArrowForward className="font-semibold mr-1 ml-1" />
                    {path.toUpperCase()}
                  </p>
                </li>
              );
            })}
          </span>
        </div>
      </MotionUpDown>
    </>
  );
};

export default Breadcrums;
