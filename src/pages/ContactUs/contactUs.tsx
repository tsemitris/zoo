export const ContactUs = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <section className="contact-us-section">
        <button className="go-back-btn" onClick={() => history.back()}>
          <span className="go-back-icon"></span>Gå tillbaka
        </button>

        <p className="page-title">Kontakta oss</p>

        <div className="contact-us-image-container">
          <img
            src="./images/women-in-aquarium.jpg"
            alt="Person silhouetted against an aquarium, observing various colorful fish and coral."
            width={50}
            height={50}
            loading="lazy"
            className="conctact-us-image"
          />
        </div>

        <div className="page-info">
          <p className="page-text">
            Vi älskar att höra från våra besökare och svara på dina frågor! Om
            du har några funderingar, feedback eller behöver hjälp, tveka inte
            att kontakta oss.
          </p>

          <div className="contact-methods-container">
            <div className="hr-containers">
              {/* Phone */}
              <div className="half-container">
                <div className="container-title">
                  <span className="title-icon phone"></span>
                  Telefon
                </div>

                <div className="container-info">
                  <p className="info-line">
                    <span className="bold-text">Kundtjänst:</span> +46 123 456
                    789
                  </p>
                  <p className="info-line">
                    (Måndag till fredag: 09:00 - 17:00)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="half-container">
                <div className="container-title">
                  <span className="title-icon email"></span>
                  E-post
                </div>

                <div className="container-info">
                  <p className="info-line">
                    <span className="bold-text">Allmän förfrågan: </span>
                    <a href="mailto:info@zoo.com" className="info-email">
                      info@zoo.com
                    </a>
                  </p>
                  <p className="info-line">
                    <span className="bold-text">Teknisk support: </span>
                    <a href="mailto:support@zoo.com" className="info-email">
                      support@zoo.com
                    </a>
                  </p>
                  <p className="info-line">
                    <span className="bold-text">Pressförfrågningar: </span>
                    <a href="mailto:press@zoo.com" className="info-email">
                      press@zoo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="hr-containers">
              {/* Postal address */}
              <div className="half-container">
                <div className="container-title">
                  <span className="title-icon location-pin"></span>
                  Postadress
                </div>

                <div className="container-info">
                  <p className="info-line">
                    <span className="bold-text">Zoo</span>
                  </p>
                  <p className="info-line">Safari Gatan 123</p>
                  <p className="info-line">123 45 Stockholm</p>
                  <p className="info-line">Sverige</p>
                </div>
              </div>

              <div className="half-container">
                <div className="container-title">
                  <span className="title-icon heart"></span>
                  Följ Oss
                </div>

                <div className="container-info">
                  <button className="social-media-icon facebook-icon">
                    Facebook
                  </button>
                  <button className="social-media-icon twitter-icon">
                    Twitter
                  </button>
                  <button className="social-media-icon instagram-icon">
                    Instagram
                  </button>
                  <button className="social-media-icon tiktok-icon">
                    Tiktok
                  </button>
                  <button className="social-media-icon youtube-icon">
                    YouTube
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
