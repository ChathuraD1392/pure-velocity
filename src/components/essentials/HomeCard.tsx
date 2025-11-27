import type { Member } from "../../assets/data/team";

const HomeCard = ({ member }: { member: Member }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex h-1/2">
      <img
        src={member.photo}
        alt={member.name}
        className="w-[400px] h-full object-cover p-3 rounded-3xl"
      />
      <div className="p-5 w-full">
        <div>
          <h4 className="text-lg font-bold mt-2">{member.name}</h4>
          <span className="text-[#0a0f2d] bg-[#00ff99] px-2 py-1 rounded mr-2 text-[8px]">
            {member.designation}
          </span>
        </div>
        <span className="text-gray-800 text-xs w-full">
          {member.para_short}
        </span>
        <button className="mt-4 inline-flex items-center border border-[#00ff99] font-semibold rounded-lg p-2 hover:bg-[#00ff99]">
          Read More <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
