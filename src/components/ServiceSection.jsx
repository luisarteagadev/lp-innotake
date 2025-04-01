import { services } from "../constants";
import LabelSection from "./LabelSection";

const ServiceSection = () => {
  return (
    <div id="services" className="relative  py-20 lg:py-30  ">
      <div className="text-center">
        <LabelSection>Servicios</LabelSection>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl  tracking wide">
          Explora
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            nuestros servicios
          </span>{" "}
        </h2>
      </div>

      <div className="flex flex-wrap  mt-10 lg:mt-15   ">
        {services.map((service, index) => (
          <div key={index} className="w-full  sm:1/2 lg:w-1/3 pt-2 px-10 flex flex-col items-center text-center">
            <div
              className="flex h-18 w-18 p-2 bg-white/30 backdrop-blur-md 
            text-blue-700 justify-center items-center rounded-full border border-white/20 shadow-lg"
            >
              {service.icon}
            </div>

            <div>
              <h5 className="mt-2 mb-1 text-xl">{service.text}</h5>
              <p className="text-md  mb-20 text-neutral-500">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
