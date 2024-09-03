import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <img className="website-logo" src="./logo/zooLogo.svg" />
        <nav className="nav-bar">
          <NavLink className="nav-link" to={"/"}>
            Hem
          </NavLink>
          <NavLink className="nav-link" to={"/animals"}>
            Djur
          </NavLink>
          <NavLink className="nav-link" to={"/about-us"}>
            Om oss
          </NavLink>
          <NavLink className="nav-link" to={"/faq"}>
            Vanliga frågor
          </NavLink>
          <NavLink className="nav-link" to={"/contact-us"}>
            Kontakta oss
          </NavLink>
        </nav>
      </header>
    </>
  );
};
