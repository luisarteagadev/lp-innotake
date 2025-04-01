
 
 import { icons } from "../../constants";

 const ButtonWSP = () => {
  return (

<a
  href="#contact"
  className={`bg-green-500 text-white text-opacity-80 flex items-center justify-center font-semibold relative 
              rounded-lg overflow-hidden group transition-all duration-300 ease-in-out w-full md:w-[250px] h-[60px] text-[16px]`}
>
  {/* Ícono con rotación */}
  <span className="w-16 h-full flex items-center justify-center p-2 relative z-10 hidden md:block  ">
    <img 
      className="h-12 w-12 object-contain transition-transform duration-700 ease-in-out group-hover:rotate-360"
      src={icons.icon_wsp} 
      alt="Icono Email" 
    />
  </span>

  {/* Fondo animado */}
  <span
    className="absolute left-16 bg-gradient-to-r from-green-500 to-green-800 w-full h-full rounded scale-x-0 
               group-hover:scale-x-100 transition-transform origin-left duration-700 ease-in-out z-0"
  ></span>

  {/* Texto */}
  <span  className="relative z-10 p-3">
    Envianos un mensaje
  </span>
</a>

)
}

export default ButtonWSP;