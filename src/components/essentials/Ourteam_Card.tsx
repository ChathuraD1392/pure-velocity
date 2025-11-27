import { badgeColors, type Member } from "../../assets/data/team";

interface Props {
  member: Member;
}

const Ourteam_Card = ({ member }: Props) => {
  return (
    <>
      <div className="rounded-xl p-6 shadow-sm text-center border border-slate-100 h-full">
        <div
          className={`w-28 h-28 mx-auto rounded-full bg-white overflow-hidden p-1 mb-4 border-3 border-${
            badgeColors[member.badge_color]
          }-400`}
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover p-3px rounded-full "
          />
        </div>
        <h4 className="font-semibold text-2xl mb-2">{member.name}</h4>
        <p className="text-sm font-bold text-gray-600">{member.designation}</p>
        <p className="mt-3 text-sm text-gray-700">{member.para_1}</p>
        <p className="mt-3 text-sm text-gray-700">{member.para_2}</p>
        <p className="mt-3 text-sm text-gray-700">
          {member.para_3}
          <br />
          <span
            className={`inline-flex items-center rounded-md mt-2 px-2 py-1 text-xs font-medium ring-1 ${
              badgeColors[member.badge_color]
            }`}
          >
            {member.badge}
          </span>
        </p>
      </div>
    </>
  );
};

export default Ourteam_Card;
