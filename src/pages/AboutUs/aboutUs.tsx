export const AboutUs = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <section className="about-us-section">
        <button className="go-back-btn" onClick={() => history.back()}>
          <span className="go-back-icon"></span>Gå tillbaka
        </button>
        <p className="page-title">Om oss</p>
        <div className="about-us-image-container">
          <img
            src="/images/flock-of-flamigos.jpg"
            alt="flock of flamigos"
            loading="lazy"
            className="about-us-image"
          />
        </div>
        <div className="about-us-container">
          <p className="about-us-text">
            Välkommen till Zoo, den första digitala djurparken som tar dig
            närmare djuren och naturen än någonsin tidigare – direkt från ditt
            eget hem!
          </p>
          <p className="about-us-title">Vår vision</p>
          <p className="about-us-text">
            Vår vision är att skapa en unik plattform där människor i alla
            åldrar kan lära sig om och interagera med djur från hela världen.
            Genom innovativ teknik och pedagogiska resurser strävar vi efter att
            öka medvetenheten om vikten av djurens bevarande och deras naturliga
            miljöer.
          </p>
          <p className="about-us-title">Vad vi gör</p>
          <p className="about-us-text">
            Zoo erbjuder en rad interaktiva funktioner, inklusive möjligheten
            att mata djur, utforska en interaktiv karta, och delta i virtuella
            turer. Vi kombinerar underhållning med utbildning för att ge dig en
            rolig och lärorik upplevelse som främjar en djupare förståelse för
            djurlivet och dess betydelse för vår planet.
          </p>
          <p className="about-us-title">Vårt engagemang</p>
          <p className="about-us-text">
            Vi är engagerade i att sprida kunskap och öka förståelsen för
            världens djur. Genom vårt symboliska adoptionsprogram och våra
            utbildningsresurser, kan du aktivt bidra till bevarandeinsatser och
            lära dig mer om de djurarter vi älskar och vill skydda.
          </p>
          <p className="about-us-title">Följ oss på resan</p>
          <p className="about-us-text">
            Zoo är mer än bara en webbplats – det är ett gemensamt äventyr för
            alla som älskar djur. Följ med oss på resan när vi fortsätter att
            utveckla och förbättra vår plattform, och tillsammans kan vi göra en
            verklig skillnad för djurens framtid.
          </p>
        </div>
      </section>
    </>
  );
};
