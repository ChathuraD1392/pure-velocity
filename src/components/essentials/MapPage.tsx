const MapPage = () => {
  return (
    <div className="mockup-browser border-base-300 w-[600px] h-[600px] m-10 bg-white p-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4785.866331512332!2d79.84301888429216!3d6.924397875220569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259007abfc5c5%3A0xaf12c2edca819063!2sCity%20of%20Dreams!5e1!3m2!1sen!2slk!4v1763872264647!5m2!1sen!2slk"
        className={`w-full h-full border-0 rounded opacity-90 shadow-xs`}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default MapPage;
