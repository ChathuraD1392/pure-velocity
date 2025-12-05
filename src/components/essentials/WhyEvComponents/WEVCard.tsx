import type { WhyEv } from "../../../assets/data/whyevs";
import logo from "../../../assets/images/Icon white and gradient.svg";

const WEVCard = ({ whyev, index }: { whyev: WhyEv; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 items-center mt-5 mb-3 max-w-7xl">
        {/* IMAGE */}
        <div
          className={`order-1 ${
            !isEven ? "md:order-1" : "md:order-2"
          } mt-3 mb-3 w-full h-full flex justify-center items-center`}
        >
          <img
            src={whyev.image}
            alt={whyev.title}
            className="rounded-lg max-w-full max-h-full object-contain"
          />
        </div>

        {/* TEXT */}
        <div
          className={`order-2 ${
            !isEven ? "md:order-2" : "md:order-1"
          } mt-3 mb-3`}
        >
          <p className="pt-2 pb-2 text-black font-semibold text-md bg-blue-200/50 rounded-lg p-1 pl-3">
            {whyev.title}
          </p>

          <p className="pt-2 pb-2 text-black font-light text-md">
            {whyev.desc_1}
          </p>

          <ul className="pt-2 pb-2 pl-2 text-black font-semibold text-md">
            {whyev.points_1.map((i) => (
              <li key={i} className="flex items-center ml-5">
                <span className=" text-green-300 font-bold pr-5">
                  <img
                    src={logo}
                    alt="log"
                    className="w-5 h-5 rounded-md bg-black/90"
                  />
                </span>
                <span className=" text-black rounded-lg p-1.5 shadow-lg pl-3 pr-3 font-semibold text-sm">
                  {i}
                </span>
              </li>
            ))}
          </ul>

          <p className="pt-2 pb-2  text-black font-light text-md">
            {whyev.desc_2}
          </p>

          <ul className="pt-2 pb-2 pl-2 text-black font-semibold text-md">
            {whyev.points_2?.map((i) => (
              <li key={i} className="flex items-center ml-5">
                <span className=" text-green-300 font-bold pr-5">
                  <img
                    src={logo}
                    alt="log"
                    className="w-5 h-5 rounded-full bg-black/90"
                  />
                </span>
                <span className=" text-black rounded-lg p-1 shadow-2xl font-semibold text-sm">
                  {i}
                </span>
              </li>
            ))}
          </ul>

          <p className="pt-2 pb-2 text-black font-semibold text-md">
            {whyev.desc_3}
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-black" />
    </>
  );
};

export default WEVCard;
