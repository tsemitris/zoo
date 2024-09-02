import { FAQPresentation } from "../../components/FAQPresentation";

export const FAQ = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <section className="faq-section">
        <button className="go-back-btn" onClick={() => history.back()}>
          <span className="go-back-icon"></span>Gå tillbaka
        </button>

        <p className="page-title">Vanliga frågor</p>
        <div className="faq-image-container">
          <img
            src="/images/brown-bear-and-baby.jpg"
            alt="brown bear and baby bear on gray concrete wall during daytime"
            loading="lazy"
            className="faq-image"
          />
        </div>

        <FAQPresentation
          question="Vad är Zoo?"
          answer="Digitala Zoot är en onlineplattform som låter dig utforska och lära dig om djur i en virtuell miljö. Det erbjuder interaktiva funktioner som att mata djur, virtuella turer och utbildningsresurser för att förbättra din upplevelse."
        ></FAQPresentation>

        <FAQPresentation
          question="Hur navigerar jag på Zoo?"
          answer="Du kan navigera på Zoo med hjälp av menyn högst upp på sidan. De huvudsakliga sektionerna inkluderar Hem, Djur, Om Oss, Interaktiv Karta och Kontakta Oss. Varje sektion erbjuder olika funktioner och information för att förbättra ditt besök."
        ></FAQPresentation>

        <FAQPresentation
          question="Hur kan jag mata djuren?"
          answer={`För att mata djuren, besök sektionen Djur och välj det djur du vill interagera med. Om matningsalternativet är tillgängligt för det djuret, hittar du interaktiva kontroller som låter dig "mata" dem virtuellt. Denna funktion hjälper till att simulera upplevelsen av att ta hand om och engagera sig med djuren.`}
        ></FAQPresentation>

        <FAQPresentation
          question="Hur ofta kan jag mata djuren?"
          answer="Du kan mata djuren var tredje timme. Detta ger dig flera möjligheter under dagen att interagera med dina favoriter i vårt digitala zoo."
        ></FAQPresentation>

        <FAQPresentation
          question="Finns det direktsända djurfilmer eller videor?"
          answer="För närvarande erbjuder vi inga direktsändningar. Du kan dock njuta av högkvalitativa bilder och videor av djuren i deras virtuella inhägnader. Dessa finns i sektionen Djur och ger en detaljerad bild av deras beteende och livsmiljö."
        ></FAQPresentation>

        <FAQPresentation
          question="Hur ofta uppdateras innehållet?"
          answer="Vi uppdaterar regelbundet vårt innehåll för att säkerställa att du har tillgång till den senaste informationen och funktionerna. Detta inkluderar att uppdatera djurprofiler, lägga till nya interaktiva element och uppdatera utbildningsresurser."
        ></FAQPresentation>

        <FAQPresentation
          question="Hur kan jag stödja Digitala Zoot?"
          answer="Du kan stödja Digitala Zoot genom att göra en donation, adoptera ett djur eller köpa varor från vår butik. För mer information, kontakt oss."
        ></FAQPresentation>

        <FAQPresentation
          question="Hur kontaktar jag Zoo-teamet?"
          answer="För frågor eller stöd kan du kontakta oss via sidan Kontakta Oss. Vi erbjuder alternativ för att skicka e-post eller ansluta via sociala medier."
        ></FAQPresentation>

        <FAQPresentation
          question="Var kan jag hitta information om kommande evenemang?"
          answer="Information om kommande evenemang och nyheter finns på Hem sidan. Här hittar du detaljer om speciella virtuella evenemang, nya funktioner och andra aktiviteter på Zoo."
        ></FAQPresentation>
      </section>
    </>
  );
};
