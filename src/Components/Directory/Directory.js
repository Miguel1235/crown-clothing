import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";

import { connect } from "react-redux";

// Tiene una lista de elementos de menu en el inicio de la pagina
const Directory = ({sections}) => {
  return (
    <div className="directoryMenu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ directory }) => ({
  sections: directory.sections,
});
export default connect(mapStateToProps)(Directory);
