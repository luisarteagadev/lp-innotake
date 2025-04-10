import LabelSection from "./LabelSection";
import { icons } from "../constants";
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="grid md:grid-cols-2 gap-8 py-20 lg:py-30 min-h-[700px]"
    >
      <div >
        <div className="flex flex-col gap-y-4">
          <div>
            <LabelSection>Contactanos</LabelSection>
          </div>
          <h3 className="text-1xl sm:text-2xl lg:text-3xl  tracking wide font-semibold">
            Ponte en contacto con nosotros
          </h3>
          <p className="text-justify">
            Estamos aquí para ayudarte. Si tienes preguntas, necesitas más
            información sobre nuestros servicios o quieres colaborar con
            nosotros, no dudes en comunicarte. Nuestro equipo está disponible
            para brindarte asistencia y responder a todas tus inquietudes.
          </p>
        </div>
        {/* CONTENT ICONS */}
        <div className="flex flex-col gap-y-5 mt-5 ">
          {/* SECTION ICON */}
          <div className="flex gap-2 items-center ">
            <div className="flex items-center justify-center text-blue-500 h-12 w-12 ">
              {icons.icon_clock}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Horario de atención</span>
              <span>L-V y 8:00 am - 5:00 pm</span>
            </div>
          </div>

          <div className="flex gap-2 items-center ">
            <div className="flex items-center justify-center text-blue-500 h-12 w-12 ">
              {icons.icon_mail}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Correo electronico</span>
              <span>Innotake@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      <div>
        <form
          action="
        "
        >
          <div className="grid grid-cols-1 md:gird-cols-1 gap-6 mb-5">
            <input
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Asunto"
              required=""
            />
            <input
              type="text"
              id="default-search"
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
              placeholder="Email"
              required=""
            />
            <input
              type="text"
              id="default-search"
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
              placeholder="Celular"
              required=""
            />
            <textarea
              type="text"
              id="default-search"
              className="block w-full h-40 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-3xl placeholder-gray-400 focus:outline-none resize-none mb-5"
              placeholder="Mensaje"
              required=""
            ></textarea>
            <div className="flex">
            <button className="w-52 h-12 px-4 bg-blue-500 hover:bg-blue-600 transition-all duration-500 shadow-xs text-white text-base font-semibold leading-6 btn rounded-lg">
              Enviar Mensaje
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
