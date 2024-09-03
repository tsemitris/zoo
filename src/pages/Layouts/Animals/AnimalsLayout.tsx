import { Link, Outlet, useLocation } from "react-router-dom";

export const AnimalsLayout = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "active" : "";

  return (
    <>
      <section className="video-container">
        <div className="animals-header">
          <p className="animals-title">Möt våra djurvänner!</p>
          <div className="animals-nav">
            <Link
              className={`nav-option ${isActive("/animals")}`}
              to="/animals"
            >
              Alla
            </Link>
            <Link
              className={`nav-option ${isActive("/animals/fed")}`}
              to="/animals/fed"
            >
              Matade djur
            </Link>
            <Link
              className={`nav-option ${isActive("/animals/unfed")}`}
              to="/animals/unfed"
            >
              Omatade djur
            </Link>
          </div>
        </div>
        <video autoPlay playsInline>
          <source src="./videos/zooPenguins.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="animals-container">
        <Outlet></Outlet>
      </section>
    </>
  );
};
