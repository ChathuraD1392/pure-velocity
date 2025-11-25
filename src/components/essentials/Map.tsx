import { TbZoom } from "react-icons/tb";

const Map = () => {
  return (
    <div className="shadow-xl bg-white w-full border border-slate-100 rounded-lg">
      <div className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4785.866331512332!2d79.84301888429216!3d6.924397875220569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259007abfc5c5%3A0xaf12c2edca819063!2sCity%20of%20Dreams!5e1!3m2!1sen!2slk!4v1763872264647!5m2!1sen!2slk"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
      <div className="justify-end pr-6 card-actions my-4">
        <button>
          <a
            href="https://maps.app.goo.gl/Uzteec3TboEPRFPD7"
            className="btn bg-[#007bff] border-0 text-sm"
          >
            <TbZoom />
            View on Google Maps
          </a>
        </button>
      </div>
    </div>
  );
};

export default Map;
