import type { WhyEv } from "../../../assets/data/whyevs";
import ScrollingOneSide from "../../Scrolling/ScrollingOneSide";

const WEVCard = ({ whyev, index }: { whyev: WhyEv; index: number }) => {
  const isEven = index % 2 === 0;

  const x_valueImage = !isEven ? -100 : 100;
  const x_valueText = isEven ? -100 : 100;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 items-center mt-5 mb-3 max-w-7xl">
        {/* IMAGE */}

        <div
          className={`order-1 ${
            !isEven ? "md:order-1" : "md:order-2"
          } mt-3 mb-3 w-full h-full flex justify-center items-center`}
        >
          <ScrollingOneSide x={x_valueImage} duration={1}>
            <img
              src={whyev.image}
              alt={whyev.title}
              className="rounded-lg max-w-full max-h-full object-contain hover:scale-105 duration-400 ease-in-out"
            />
          </ScrollingOneSide>
        </div>

        {/* TEXT */}
        <div
          className={`order-2 ${
            !isEven ? "md:order-2" : "md:order-1"
          } mt-3 mb-3`}
        >
          <ScrollingOneSide x={x_valueText} duration={1}>
            <p className="pt-2 pb-2 text-black font-semibold text-lg rounded-lg">
              {whyev.title}
            </p>

            <p className="pt-2 pb-2 text-black font-light text-md">
              {whyev.desc_1}
            </p>

            <ul className="pt-2 pb-2 pl-2 text-black font-semibold text-md">
              {whyev.points_1.map((i) => (
                <li key={i} className="flex items-center ml-5">
                  <span className=" text-black rounded-lg p-1.5 pl-3 pr-3 font-bold text-sm">
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
                  <span className=" text-black rounded-lg p-1 font-semibold text-sm">
                    {i}
                  </span>
                </li>
              ))}
            </ul>

            <p className="pt-2 pb-2 text-black font-semibold text-md">
              {whyev.desc_3}
            </p>
          </ScrollingOneSide>
        </div>
      </div>
      <hr className="h-0.5 bg-slate-300" />
    </>
  );
};

export default WEVCard;
