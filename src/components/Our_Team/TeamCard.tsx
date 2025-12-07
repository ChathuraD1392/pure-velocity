import type { Member } from "../../assets/data/team";

const TeamCard = ({ member }: { member: Member }) => {
  return (
    <div className="card card-side shadow-lg w-[20em] md:w-[35em] mt-5 bg-white text-[#0a0f2d] rounded-xl h-70">
      <div className="rounded-l-xl overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-70 h-70 object-cover p-3 rounded-3xl"
        />
      </div>
      <div className="card-body mt-2">
        <div className="grid grid-cols-1 gap-2 justify-items-start">
          <h2 className="card-title pr-3 flex justify-start">{member.name}</h2>
          <div>
            <p className="text-md font-semibold mt-2 hidden md:block">
              {member.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
