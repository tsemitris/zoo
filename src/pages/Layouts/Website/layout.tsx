import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <img className="website-logo" src="/logo/zooLogo.svg" />
        <nav className="nav-bar">
          <NavLink className="nav-link" to={"/"}>
            Hem
          </NavLink>
          <NavLink className="nav-link" to={"/animals"}>
            Djur
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>Footer</footer>
    </>
  );
};
