import { CheckCircle2 } from "lucide-react";
import PropTypes from "prop-types";


 const CardPricing = ({option}) => {
  return (
    <div className="h-full flex justify-center items-center px-6 py-12">
        <div className={`bg-white border ${option.label?'border-blue-500':'border-neutral-900'}  border-opacity-10 rounded-md shadow-xl cursor pointer relative`}>
          {/* POPULAR TAG */}
          {option.label?( <span className="bg-blue-600 text-white px-6 py-1 rounded-full uppercase text-sm 
          font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Más Popular</span> ):null}
          {/* CARD HEADER */}
          <div className="px-6 py-12 border-b-2 border-gray-200">
            <p className="text-3xl font-sembiold text-center mb-4">{option.title}</p>
            <div className="flex justify-center items-center">
              <div className="flex items-start">
                <p className="text-4xl font-medium">$</p>
                <p className="text-7xl font-bold">49</p>
              </div>
              <p className="text-2xl text-gray-400">/month</p>
            </div>
          </div>
          {/* CARD BODY */}
          <div className="p-12 bg-gray-100">
            <ul className="spaces-y-3">
              <li className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-lg text-gray-600">Feature #1</p>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-lg text-gray-600">Feature #2</p>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-lg text-gray-600">Feature #3</p>
              </li>
            </ul>
            {/* CTA */}
            <button 
        className={`mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap 
        focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition-all 
        ${option.label ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transform' : 'bg-white text-blue-600 hover:bg-gray-50'}`}
      >
        Start your free trial
      </button>
          </div>
        </div>
      </div>
  )
  
}
CardPricing.propTypes = {
    option: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      label:PropTypes.bool.isRequired,
    }).isRequired,
  };

export default CardPricing;