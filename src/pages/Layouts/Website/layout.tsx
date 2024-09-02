import { FormEvent, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  const date = new Date();
  const thisYear = date.getFullYear().toString();

  const [year, setYear] = useState(thisYear);

  useEffect(() => {
    setYear(thisYear);
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

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
          <NavLink className="nav-link" to={"/about-us"}>
            Om oss
          </NavLink>
          <NavLink className="nav-link" to={"/faq"}>
            Vanliga frågor
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        {/* Newsletter */}
        <section className="newsletter-outer-container">
          <div className="newsletter-inner-container">
            <div className="newsletter-icon"></div>
            <p className="newsletter-title">Håll dig uppdaterad!</p>
            <p className="newsletter-info">
              Anmäl dig till vårt nyhetsbrev för att få de senaste nyheterna,
              evenemangen och uppdateringarna.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                id="newsletterEmail"
                className="newsletter-form-email"
                placeholder="E-post"
              />
              <button className="newsletter-submit-button global-btn">
                Submit
              </button>
            </form>
          </div>
        </section>
        {/* Footer */}
        <section className="footer-link-container">
          <img
            src="/logo/zooLogoWhite.svg"
            width={100}
            height={100}
            loading="lazy"
            className="footer-logo"
          />
          <div className="footer-upper-container">
            {/* Contact us + Social Media */}
            <section className="category-container">
              <section className="category-hr">
                <p className="category-title">Kontaktinformation</p>
                <div className="contact-us-info-container">
                  <img
                    src="/icons/Location-pin.svg"
                    width={50}
                    height={50}
                    alt="illustration of a envelope"
                    loading="lazy"
                    className="contact-us-icon"
                  />
                  <p className="contact-us-info">
                    Zoo, Safari Gatan 123, Stockholm, Sverige
                  </p>
                </div>
                <div className="contact-us-info-container">
                  <img
                    src="/icons/Mail.svg"
                    width={50}
                    height={50}
                    alt="illustration of a envelope"
                    loading="lazy"
                    className="contact-us-icon"
                  />
                  <a
                    href="mailto:info@digitalzoo.com"
                    className="contact-us-info contact-us-email"
                  >
                    info@digitalzoo.com
                  </a>
                </div>
                <div className="contact-us-info-container">
                  <img
                    src="/icons/Phone.svg"
                    width={50}
                    height={50}
                    alt="illustration of a phone"
                    loading="lazy"
                    className="contact-us-icon"
                  />
                  <p className="contact-us-info">+46 123 456 789</p>
                </div>
              </section>
              <section className="category-hr">
                <p className="category-title">Sociala Medier</p>
                <img
                  src="/icons/Facebook.svg"
                  width={50}
                  height={50}
                  alt="facebook icon"
                  loading="lazy"
                  className="category-icon"
                />
                <img
                  src="/icons/Twitter.svg"
                  width={50}
                  height={50}
                  alt="twitter icon"
                  loading="lazy"
                  className="category-icon"
                />
                <img
                  src="/icons/Instagram.svg"
                  width={50}
                  height={50}
                  alt="twitter icon"
                  loading="lazy"
                  className="category-icon"
                />
                <img
                  src="/icons/TikTok.svg"
                  width={50}
                  height={50}
                  alt="twitter icon"
                  loading="lazy"
                  className="category-icon"
                />
                <img
                  src="/icons/YouTube.svg"
                  width={50}
                  height={50}
                  alt="twitter icon"
                  loading="lazy"
                  className="category-icon"
                />
              </section>
            </section>
            {/* Links */}
            <section className="category-container">
              <p className="category-title">Snabblänkar</p>
              <Link className="category-link" to={"/"}>
                Hem
              </Link>
              <Link className="category-link" to={"/animals"}>
                Djur
              </Link>
              <Link className="category-link" to={"/"}>
                Karta
              </Link>
              <Link className="category-link" to={"/about-us"}>
                Om Oss
              </Link>
              <Link className="category-link" to={"/faq"}>
                Vanliga Frågor (FAQ)
              </Link>
              <Link className="category-link" to={"/"}>
                Kontakta Oss
              </Link>
            </section>
            {/* Partners */}
            <section className="category-container">
              <section className="category-hr">
                <p className="category-short-text">
                  Digitala Zoot är Sveriges första digitala djurpark som
                  erbjuder interaktiva upplevelser och utbildning om världens
                  djur och deras livsmiljöer. Utforska, lär och interagera med
                  djur från hela världen – direkt från ditt hem.
                </p>
              </section>
              <section className="category-hr">
                <p className="category-title">Våra samarbetspartner:</p>
                <img
                  src="/partner-logo/WWF.svg"
                  width={50}
                  height={50}
                  alt="WWF logo"
                  loading="lazy"
                  className="category-parter-logo"
                />
                <img
                  src="/partner-logo/Nrm.png"
                  width={50}
                  height={50}
                  alt="Naturhistoriska Riksmuseet logo"
                  loading="lazy"
                  className="category-parter-logo"
                />
              </section>
            </section>
          </div>
          <div className="footer-lower-container">
            <hr className="footer-horizontal-rule"></hr>
            <div className="footer-options">
              <button className="option">Integritetspolicy</button>
              <button className="option">Användarvillkor</button>
              <button className="option">Cookiepolicy</button>
            </div>
            <p className="footer-text">
              &#169; {year} Zoo. Alla rättigheter förbehållna.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};
