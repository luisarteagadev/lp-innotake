import PropTypes from "prop-types";
import { images } from "../../constants";

const ButtonContact = ({ size = "sm" }) => {
  const sizeClasses = {
    sm: "w-[200px] h-[40px] text-[12px]",
    md: "w-full md:w-[200px] h-[60px] text-[16px]",
    lg: "w-[250px] h-[70px] text-lg",
  };
  return (
    // <a
    //   href=""
    //   className={`bg-blue-500  text-white text-opacity-50 
    //         flex items-center justify-center font-semibold  relative rounded 
    //         group ${sizeClasses[size]}`}
    // >
    //   <span className="w-[64px] h-full inline-flex items-center justify-center p-1 z-10">
    //     <img className="h-14 w-10 object-contain" src={images.icon_email} alt="icono email" />
    //   </span>

    //   <span
    //     className="bg-gradient-to-r from-blue-500 to-blue-800 w-full h-full  rounded scale-x-30   group-hover:scale-x-100
    //            transition-transform origin-left duration-500 ease-in-out absolute z-0"
    //   ></span>
    //   <span className="z-10 p-3">Contactanos Ahora!</span>
    // </a>

<a
  href="#contact"
  className={`bg-blue-500 text-white text-opacity-80 flex items-center justify-center font-semibold relative 
              rounded-lg overflow-hidden group transition-all duration-300 ease-in-out ${sizeClasses[size]}`}
>
  {/* Ícono con rotación */}
  <span className="w-16 h-full flex items-center justify-center p-2 relative z-10 hidden md:block ">
    <img 
      className="h-12 w-12 object-contain transition-transform duration-700 ease-in-out group-hover:rotate-360"
      src={images.icon_email} 
      alt="Icono Email" 
    />
  </span>

  {/* Fondo animado */}
  <span
    className="absolute left-16 bg-gradient-to-r from-blue-500 to-blue-800 w-full h-full rounded scale-x-0 
               group-hover:scale-x-100 transition-transform origin-left duration-700 ease-in-out z-0
               "
  ></span>

  {/* Texto */}
  <span  className="relative z-10 p-3  ">
    ¡Contáctanos!
  </span>
</a>

  );
};

ButtonContact.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]), // Solo acepta estos valores
};
export default ButtonContact;
