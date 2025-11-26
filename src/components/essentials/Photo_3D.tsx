const Photo_3D = ({ src }: { src: string }) => {
  return (
    <>
      <div className="hover-3d bg-transparent">
        <figure className="w-full h-full rounded-2xl">
          <img src={src} alt="3D card" className="overflow-hidden" />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Photo_3D;
