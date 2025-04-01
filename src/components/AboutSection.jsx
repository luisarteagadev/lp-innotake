import LabelSection from "./LabelSection";
import { CircleCheck } from "lucide-react";
import { images } from "../constants";
const AboutSection = () => {
  return (
    <div
      id="aboutus"
      className="grid md:grid-cols-2 gap-8 py-20 lg:py-30 min-h-[700px] "
    >
      <div className="wrapper__about flex flex-col gap-y-4">
        <div>
          <LabelSection>Sobre Nosotros</LabelSection>
        </div>
        <h3 className="text-1xl sm:text-2xl lg:text-3xl  tracking wide font-semibold">
          ¿Quienes Somos?
        </h3>
        <p className="text-justify">
          Somos una agencia especializada en el desarrollo de soluciones
          digitales innovadoras, enfocadas en potenciar el crecimiento de MyPEs
          y PyMEs a través del desarrollo de páginas web, tiendas online y
          aplicaciones móviles a medida.
        </p>
        <div className="grid grid-s-2 gap-2 ">
          <div className="flex gap-x-4">
            <CircleCheck className="text-blue-700"></CircleCheck>
            <span className="text-[#737373] font-medium capitalize">
              Soporte tecnico
            </span>
          </div>
          <div className="flex gap-x-4">
            <CircleCheck className="text-blue-700"></CircleCheck>
            <span className="text-[#737373] font-medium capitalize">
              Diseño personalizado
            </span>
          </div>
          <div className="flex gap-x-4">
            <CircleCheck className="text-blue-700"></CircleCheck>
            <span className="text-[#737373] font-medium capitalize">
              Desarrollo rapido
            </span>
          </div>
          <div className="flex gap-x-4">
            <CircleCheck className="text-blue-700"></CircleCheck>
            <span className="text-[#737373] font-medium capitalize">
              Soluciones escalables
            </span>
          </div>
        </div>
      </div>
      <div className="relative px-8">
        <img src={images.blob_image} alt="" className="w-full" />
        <img
          src={images.responsive_image}
          alt=""
          className="absolute top-0 right-12 w-[500px]"
        />
      </div>
    </div>
  );
};

export default AboutSection;
