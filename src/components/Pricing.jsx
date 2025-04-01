import { pricingOptions } from "../constants";
import CardPricing from "./CardPricing";
const Pricing = () => {
  return (
    <div className="mt-10 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Paquetes
      </h2>

      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option,index)=>(
            <CardPricing key={index} option={option}></CardPricing>
        ))}
      </div>
      
    </div>
  );
};

export default Pricing;
