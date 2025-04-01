
import LabelSection from "./LabelSection";
import ProjectSlider from "./ProjectSlider";
const ProyectsSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[700px] pb-20">
      <div className="text-center">
        <LabelSection>Proyectos</LabelSection>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl   tracking wide">
        Explora nuestros proyectos y encuentra 

          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            inspiración para el tuyo.
          </span>{" "}
        </h2>
      </div>
      <div className="w-full h-full mt-10 lg:mt-15">
      <ProjectSlider ></ProjectSlider>
      </div>
     
      {/* <div className="flex flex-col justify-center w-full h-full  mt-10  lg:mt-15">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {proyects.map((p) => (
            <div key={p.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={p.src}
                alt=""
                className="w-full h-64 object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
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
          ))}
        </div>
      </div> */}


    </div>
  );
};

export default ProyectsSection;
