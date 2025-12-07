import { services } from "../../assets/data/services";
import BaseComponent from "./BaseComponent";
const HighVoltage = () => {
  return (
    <>
      <BaseComponent service={services[1]} />
    </>
  );
};

export default HighVoltage;
