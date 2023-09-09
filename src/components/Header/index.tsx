import { Link , NavLink} from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <nav className="dce-navbar">
      <div className="dce-font-navbar">
        <Link to="/">
          <h1>MeuSite</h1>
        </Link>
        <div className="dce-link-navbar">
          <NavLink to="/home" className={({isActive}) => isActive ? "menu-active": "none"}>
            <p>Inicio</p>
          </NavLink>
          <NavLink to="promotion" className={({isActive}) => isActive ? "menu-active": ""}>
            <p>Promoção</p>
          </NavLink>
          <NavLink to="enrollment" className={({isActive}) => isActive ? "menu-active": ""}>
            <p>Participar</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
