import { BsZoomIn } from "react-icons/bs";

interface Props {
  height: number;
  width: number | string;
  title?: string;
  address?: string;
  mobile?: string;
  btnColor: string;
  textColor: string;
  opacity: number;
  backgroundColor: string;
  paraColor: string;
  footerColor: string;
  borderColor?: string;
  isBtnAvailable: boolean;
}

const MapCard = ({
  height,
  width,
  title,
  mobile,
  address,
  btnColor,
  textColor,
  opacity,
  backgroundColor,
  paraColor,
  footerColor,
  borderColor,
  isBtnAvailable,
}: Props) => {
  return (
    <>
      <div
        className={`bg-${backgroundColor} rounded-xl border-${borderColor} `}
      >
        <div className={`text-[${paraColor}] text-center`}>
          <h1 className={`text-2xl font-medium ${title ? "pt-5 pb-3" : ""}`}>
            {title}
          </h1>
          <p className={`font-light`}>{mobile}</p>
          <p className={`font-light ${address ? "pb-1" : ""}`}>{address}</p>
        </div>
        <div
          className={`w-[${width}px] h-[${height}px] overflow-hidden rounded-b-lg`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4785.866331512332!2d79.84301888429216!3d6.924397875220569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259007abfc5c5%3A0xaf12c2edca819063!2sCity%20of%20Dreams!5e1!3m2!1sen!2slk!4v1763872264647!5m2!1sen!2slk"
            className={`w-full h-full border-0 opacity-${opacity} shadow-xs`}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        {isBtnAvailable && (
          <div className={`text-center my-3 bg-[${footerColor}]`}>
            <button
              className={`bg-[${btnColor}] text-[${textColor}]  p-2 pl-4 pr-4 mb-2 rounded-lg cursor-pointer hover:scale-105 transition-all delay-100 ease-in-out`}
            >
              <a
                href="https://maps.app.goo.gl/Uzteec3TboEPRFPD7"
                className="inline-flex items-center"
              >
                <BsZoomIn className="mr-1" /> Go to Google Map
              </a>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MapCard;
