import type { Member } from "../../assets/data/team";

interface Props {
  member: Member;
}

const Ourteam_Card = ({ member }: Props) => {
  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-slate-100">
        <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
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
            className={`inline-flex items-center rounded-md bg-${member.badge_color}-400/10 mt-2 px-2 py-1 text-xs font-medium text-${member.badge_color}-400 inset-ring inset-ring-${member.badge_color}-400/20`}
          >
            {member.badge}
          </span>
        </p>
      </div>
    </>
  );
};

export default Ourteam_Card;
