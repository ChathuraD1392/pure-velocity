import team from "../../assets/images/team_2.webp";

const Header_Team = () => {
  return (
    <div className="relative bg-green-800 px-3">
      <section id="why-evs" className="bg-linear-to-b from-white to-gray-50">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img src={team} alt="team" />
          </div>
          <div className="bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold">EVs Are Cheaper to Run</h3>
            <p className="mt-2 text-gray-700">
              Fewer moving parts means less maintenance — no oil changes, spark
              plugs, gearboxes or radiators to worry about. Lower long-term
              cost.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header_Team;
