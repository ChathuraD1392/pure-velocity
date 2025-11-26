import type { Service } from "../../assets/data/services";

interface Props {
  service: Service;
}

const Service_Card = ({ service }: Props) => {
  return (
    <>
      <div className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg">
        <img
          className="w-full h-[250px]"
          src={service.image}
          alt={service.title}
        />
        <div className="px-6 py-4">
          <article key={service.id} className="bg-white rounded-xl">
            <h3 className="font-semibold text-black text-lg">
              {service.title}
            </h3>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Service_Card;
