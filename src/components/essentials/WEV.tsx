import type { WhyEv } from "../../assets/data/whyevs";

const WEV = ({ item }: { item: WhyEv }) => {
  return (
    <div className={`text-white rounded-xl p-6 shadow-sm h-full ${item.bg}`}>
      <h3 className="font-semibold">{item.title}</h3>
      <p className="mt-2">{item.desc_1}</p>
      <ul className="list-disc list-inside">
        {item.points_1.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
      <p className="mt-2">{item.desc_2}</p>
      <ul className="list-disc list-inside">
        {item.points_2?.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
      <p className="mt-2">{item.desc_3}</p>
    </div>
  );
};

export default WEV;
