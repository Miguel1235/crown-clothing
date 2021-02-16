import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

// Estos son los rectangulos que se muestran en el inicio de la pagina

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`menuItem ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);