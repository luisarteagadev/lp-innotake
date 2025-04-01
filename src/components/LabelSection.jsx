import PropTypes from "prop-types";

const LabelSection = ({children}) => {
  return (
    <span className="bg-blue-50 text-blue-500 rounded-full h-6 text-sm font-semibold px-2 py-1 uppercase">
  {children}
</span>

  )
};
LabelSection.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo de React y es obligatorio
  };
export default LabelSection;