import photo from "../../../assets/images/p2.webp";

const ToolTip = ({ name }: { name: string }) => {
  return (
    <p className="text-lg">
      <span className="relative group cursor-pointer">
        <b className="font-semibold">{name}</b>
        <div className="absolute left-1/2 -top-24 transform -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 z-50">
          <img
            src={photo}
            alt="Chathura"
            className="w-10 h-10 object-cover rounded-full hover:scale-150 duration-500 ease-in-out"
          />
        </div>
      </span>
    </p>
  );
};

export default ToolTip;
