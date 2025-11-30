// Service_Card.tsx
import { PiPlusCircle } from "react-icons/pi";
import type { Service } from "../../assets/data/services";

interface Props {
  service: Service;
  onOpen: () => void;
}

const Service_Card = ({ service, onOpen }: Props) => {
  return (
    <div className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg h-full">
      <img
        className="w-full h-[250px] cursor-pointer object-cover"
        src={service.image}
        alt={service.title}
        onClick={onOpen}
      />
      <div className="p-4 flex justify-between items-center">
        <h3 className="font-semibold text-black text-lg">{service.title}</h3>
        <PiPlusCircle
          className="font-bold text-4xl cursor-pointer"
          onClick={onOpen}
        />
      </div>
    </div>
  );
};

export default Service_Card;
