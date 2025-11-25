import { AiFillTikTok } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { MdMedicalServices } from "react-icons/md";
import logo from "../assets/images/Logo Horizontal white@300x.png";

const Footer = () => {
  return (
    <footer className="bg-white/90 pt-5 px-3 py-2">
      {/* TOP BAR */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 bg-[#0a0f2d] pt-10 px-6 md:px-12 lg:px-10 pb-10 border-b border-dashed border-slate-400 rounded-t-xl">
        <div className="text-sm text-white flex flex-col text-center justify-center md:justify-start">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-full sm:h-14  md:h-20 lg:h-24 xl:h-28 object-contain"
          />
          <p className="hidden md:block text-md px-20">
            We specialise 100% in Tesla vehicles — nothing else.
          </p>
          <div className="flex justify-center md:justify-start gap-5 text-3xl text-white mt-6 ml-10 md:mt-12 md:ml-42">
            <FaFacebookSquare className="hover:text-[#007bff] cursor-pointer duration-200" />
            <FaInstagram className="hover:text-[#007bff] cursor-pointer duration-200" />
            <FaLinkedin className="hover:text-[#007bff] cursor-pointer duration-200" />
            <AiFillTikTok className="hover:text-[#007bff] cursor-pointer duration-200" />
          </div>
        </div>

        {/* Centered About Text (On large move to right) */}
        <div className="text-white text-center md:text-left pt-5">
          <div className="text-white hidden md:block">
            <div className="flex items-center space-x-3">
              <h3 className="font-semibold text-xl md:text-2xl">Services</h3>
              <MdMedicalServices className="text-3xl" />
            </div>

            <div className="py-4 space-y-1 font-extralight">
              <p>Advanced Diagnostics & Troubleshooting</p>
              <p>High Voltage System Repairs</p>
              <p>Electrical & Mechanical Repairs</p>
              <p>Preventative Maintenance</p>
              <p>Battery & Range Health Evaluation</p>
              <p>Software & Configuration Support</p>
            </div>
          </div>
        </div>
        <div className="text-white text-center md:text-left pt-5 grid grid-cols-1 ">
          <div className="text-white">
            <div className="flex items-center space-x-3">
              <h3 className="font-semibold text-lg md:text-2xl ml-25 md:ml-0">
                Find us
              </h3>
              <BsFillPinMapFill className="text-lg md:text-2xl" />
            </div>

            <div className="py-2 pr-2 md:pr-10 space-y-4 font-extralight text-sm">
              <p>
                <span className="font-semibold ">Hotline : </span> +94 XXXXXXXX
              </p>
              <p>
                <span className="font-semibold">Our Office : </span> 11/3/2,
                Marine Drive, Wellawatte Colombo 06
              </p>
              <p>
                <span className="font-semibold">Service Centre : </span> 75,
                Station Road, Kandana, Sri Lanka
              </p>
              <p className="flex w-fit items-center rounded-md ml-5 md:ml-0 px-2 py-1 bg-[#007bff] text-[10px] font-medium mt-2 text-white">
                <GoClockFill />
                <span className="pl-2">
                  We respond fast — usually within minutes.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full mx-auto px-4 py-3 grid grid-cols-1 md:grid-cols-3 bg-[#0a0f2d] border-t border-slate-200 rounded-b-xl items-center">
        <div className="text-[10px] md:text-sm text-white text-center">
          © {new Date().getFullYear()} Pure Velocity — Powering Sri Lanka’s EV
          future.
        </div>
        <div className="text-[10px] md:text-sm text-white text-center pt-2">
          All Rights Reserved
        </div>
        <div className="hidden md:block text-sm text-white pr-6">
          <div className="flex justify-end space-y-1 space-x-3 text-semibold">
            <p>Services</p>
            <p>About</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
