import { BsArrowRightCircle } from "react-icons/bs";
import type { Service } from "../../assets/data/services";

interface Props {
  service: Service;
}

const Header_Service_Card = ({ service }: Props) => {
  return (
    <div className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg h-full mx-5">
      <img
        className="w-full h-[250px]"
        src={service.image}
        alt={service.title}
      />
      <div className="px-6 py-4">
        <article key={service.id} className="bg-white rounded-xl text-center">
          <h3 className="font-semibold text-black text-lg">{service.title}</h3>
          <div>
            <button className="bg-[#0a0f2d]/80 p-2 pl-3 rounded-lg text-white font-semibold inline-flex items-center">
              Read More
              <BsArrowRightCircle className="ml-2 font-semibold" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Header_Service_Card;
