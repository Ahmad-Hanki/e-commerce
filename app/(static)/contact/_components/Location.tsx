const Location = () => {
  return (
    <div className="w-full pb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.4408790818716!2d37.3948119!3d37.1184248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5e7b423891d%3A0xbdfab0cfa16d2163!2sKo%C3%A7%20Gayrimenkul!5e0!3m2!1sen!2str!4v1730283811009!5m2!1sen!2str"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[50vh] md:h-[70vh]"
      ></iframe>
    </div>
  );
};

export default Location;
