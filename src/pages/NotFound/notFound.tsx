import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const NotFound = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div className="not-found-container">
          <button className="go-back-btn" onClick={() => history.back()}>
            <span className="go-back-icon"></span>Gå tillbaka
          </button>

          <p className="not-found-title">
            Oops! Vi har förlorat vår vilda sida..
          </p>
          <div className="not-found-message">
            <p className="not-found-text">
              Det verkar som att vi har tappat en djurvänlig sida någonstans i
              djungeln. 🦁🐒
            </p>

            <p className="not-found-text">
              Kanske den har rymt till en annan del av vår digitala zoo, eller
              så har en hungrig leopard helt enkelt fått tag på den! 😅
            </p>

            <p className="not-found-text">
              Men ingen fara – vi hjälper dig att hitta tillbaka till säker
              mark.
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
