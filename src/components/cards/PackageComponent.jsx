import { icons } from "../../constants";
import PropTypes from 'prop-types';

const PackageComponent = ({ title, subtitle, content }) => {
  return (
    <div className="flex flex-col justify-between bg-white px-8 py-4 border border-blue-700 shadow-blue-400 rounded-lg  ">
      <div className="flex flex-col gap-4 ">
        <div>
          <h4 className="text-xl font-semibold uppercase text-blue-700 ">
            {title}
          </h4>
          <span className="text-[#737373] font-medium capitalize">
            {subtitle}
          </span>
        </div>

        <p className="text-justify ">{content}</p>
      </div>

      <div
        className="flex w-50 border gap-1 text-white bg-blue-500 rounded-lg px-4 py-2 
    hover:text-blue-500 hover:bg-white hover:border-blue-500 transition-all duration-500"
      >
        <a href="#packages">Más Información</a>
        <i className="w-4 h-4">{icons.icon_arrow_right}</i>
      </div>
    </div>
  );
};
PackageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PackageComponent;
