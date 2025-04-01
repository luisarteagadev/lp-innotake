import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import ButtonContact from "./buttons/ButtonContact";
import ButtonWSP from "./buttons/ButtonWSP";


export const HeroSection = () => {
  return (
    <div id="home" className="flex items-center  py-20 lg:py-30 min-h-[600px] ">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div >
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-justify tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              InnoTake
            </span>
            , la opcion ideal para hacer{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              crecer tu negocio.
            </span>
          </h1>
          <p className="mt-4 text-lg text-justify text-neutral-500 max-w-4xl">
            En Innotake, transformamos ideas en soluciones digitales de alto
            impacto. Nos especializamos en el desarrollo de aplicaciones web y
            móviles, optimización de e-commerce para MyPEs y PyMEs, y
            estrategias tecnológicas personalizadas.
          </p>
          <div className="flex flex-col gap-y-2 md:flex-row mt-4 text-center gap-x-4" >
            <ButtonContact size="md" />
            <ButtonWSP/>
          </div>

          {/* <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Contactanos
        </a> */}
        </div>

        {/* <div className="relative flex justify-center">
          <video
            autoPlay
            loop
            muted
            className=" rounded-lg border  border-blue-700 shadow-blue-400  "
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

<div className="relative mt-4 md:mt-0 flex justify-center w-full h-full">
  <video
    autoPlay
    loop
    muted
    className="w-full h-full object-cover rounded-lg border border-blue-700 shadow-blue-400"
  >
    <source src={video1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

        {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      </div>
    </div>
  );
};
