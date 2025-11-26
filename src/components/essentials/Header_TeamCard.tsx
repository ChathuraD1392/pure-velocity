import { MdArrowOutward } from "react-icons/md";
import type { Member } from "../../assets/data/team";

interface Props {
  member: Member;
}
const Header_TeamCard = ({ member }: Props) => {
  return (
    <>
      <div className="card card-side shadow-lg w-[20em] md:w-[35em] mt-5 bg-[#0a0f2d] text-white rounded-xl h-60">
        <div className="rounded-l-xl overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className="w-70 h-70 object-cover"
          />
        </div>
        <div className="card-body mt-2">
          <div className="grid grid-cols-1 gap-2 justify-items-start">
            <h2 className="card-title pr-3 flex justify-start">
              {member.name}
            </h2>
            <div>
              <span
                className={`rounded-md bg-${member.badge_color}-400/10 mt-2 p-1 text-xs font-medium text-${member.badge_color}-400 inset-ring inset-ring-${member.badge_color}-400/20`}
              >
                {member.badge}
              </span>
              <p className="text-md font-semibold mt-2 hidden md:block">
                {member.designation}
              </p>
            </div>
            <p className="text-xs hidden md:block">{member.para_short}</p>
            <button
              className={`bg-${member.badge_color}-500 text-white rounded p-1 pl-2 pr-2`}
            >
              <span className="items-center hidden md:block">
                Read More <MdArrowOutward className="ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header_TeamCard;
