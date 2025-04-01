import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Eye } from "lucide-react";
import { projects } from "../constants";

const ProjectSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20} // Espacio entre slides
      slidesPerView={1} // Número de slides visibles
      navigation // Flechas de navegación
      pagination={{ clickable: true }} // Paginación (puntos)
      breakpoints={{
        640: { slidesPerView: 1 }, // Móvil: 1 slide
        768: { slidesPerView: 2 }, // Tablets: 2 slides
        1024: { slidesPerView: 3 }, // Desktop: 3 slides
      }}
      className="w-full px-4"
    >
      {projects.map((p) => (
        <SwiperSlide key={p.id} className="py-10">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={p.src}
              alt=""
              className="w-full h-64 object-cover rounded-md duration-200 hover:scale-105"
            />
            <div className="my-2 text-center">
              <h5 className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
                {p.title}
              </h5>
              {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                  {p.description}
                </p> */}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="flex items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium 
                 text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 
                 duration-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                 focus:ring-gray-100 hover:scale-105"
              >
                <Eye className="w-5 h-5" /> Ver
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
