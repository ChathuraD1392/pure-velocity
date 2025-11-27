const Photo_3D = ({ src }: { src: string }) => {
  return (
    <>
      <div className="hover-3d">
        {/* content */}
        <figure className="max-w-100 rounded-xl">
          <img src={src} alt="3D card" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
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
