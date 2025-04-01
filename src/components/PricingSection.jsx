import LabelSection from "./LabelSection";
import PackageComponent from "./cards/PackageComponent";
import { packages } from "../constants";
import '../styles/PricingSection.css';

const PricingSection = () => {
  return (


    <div
      id="packages"
      className="relative py-20 lg:py-30   "
    >

      <div className="w-full h-[1000px] md:h-[600px]  bg-blue-500 franja">
      </div>
      <div className="text-center">
        <LabelSection>Paquetes</LabelSection>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl  tracking wide">
          Explora
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            nuestros paquetes
          </span>{" "}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 w-full md:h-[400px] mt-10 px-5">
        {
          packages.map((p,index)=>(
            <PackageComponent key={index} title={p.title} subtitle={p.subtitle} content={p.content} ></PackageComponent>
          ))
        }
       
      </div>
    </div>
  );
};

export default PricingSection;
