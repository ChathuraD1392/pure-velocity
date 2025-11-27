import { memberDetails } from "../../assets/data/team";
import HomeCard from "./HomeCard";
const Header_TeamCard = () => {
  const date = new Date().getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[new Date().getMonth()].toUpperCase();
  return (
    <>
      <section className="bg-slate-200 min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">
              Lorem ipsum, dolor sit amet consectetur
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Featured Card */}
            <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-md relative flex items-end p-6 h-[500px] min-w-[340px]">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
                alt="Business Meeting"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="relative z-10">
                <span className="bg-gray-800 text-white px-3 py-1 rounded mr-2 text-sm">
                  Lorem
                </span>
                <span className="text-white text-sm">
                  Lorem ipsum dolor sit.
                </span>
                <h3 className="text-2xl font-bold mt-3 text-white max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center font-semibold text-[#00ff99] hover:underline"
                >
                  Read More <span className="ml-2">→</span>
                </a>
              </div>
              <div className="absolute top-6 text-center right-6 bg-white/80 text-[#0a0f2d] text-md rounded-xl px-4 py-2 shadow">
                {date}
                <br />
                <span className="text-sm font-bold text-[#00ff99]">
                  {month}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-[0.7] h-[500px]">
              <HomeCard member={memberDetails[0]} />
              <HomeCard member={memberDetails[1]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header_TeamCard;
