import { useEffect, useRef, useState } from "react";
import { IAnimalExt } from "../../models/IAnimalExt";
import { getStoredAnimals } from "../../utils/getStoredAnimals";
import { Link } from "react-router-dom";
import { scrollNext, scrollPrevious } from "../../utils/scrollButtons";
import { LatestUpdate } from "../../components/LatestUpdate";

export const Home = () => {
  const [animals, setAnimals] = useState<IAnimalExt[]>([]);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      const animalsData = await getStoredAnimals();
      const firstFiveAnimals = animalsData.slice(0, 5);
      setAnimals(firstFiveAnimals);
    };

    fetchAnimals();
  }, []);

  return (
    <>
      {/* Video section */}
      <section className="welcome-video-container">
        <video autoPlay playsInline loop className="welcome-video">
          <source src="/videos/zooGiraffe.mp4" type="video/mp4" />
        </video>
        <div className="welcome-message">
          <p className="title">Välkommen till Zoo</p>
          <p className="under-text">
            Upptäck en helt ny värld av djur och natur, direkt från ditt hem.
          </p>
        </div>
      </section>

      {/* Senaste */}
      <section className="scroll-boxes-section">
        <p className="section-title">Senaste</p>
        <div className="scrollable-container">
          <div className="items-container" ref={itemsContainerRef}>
            <LatestUpdate
              image="/images/hawk-on-a-branch.jpg"
              title="Halloween Med Nattens Mystiska Djur"
              date="31 oktober 2024"
            ></LatestUpdate>

            <LatestUpdate
              image="/images/monkey.jpg"
              title="Utbildningsresurser För Lärare och Studenter"
              date="10 oktober 2024"
            ></LatestUpdate>

            <LatestUpdate
              image="/images/whale-breach.jpg"
              title="Marina Djur Ansluter Till Vår Digitala Zoo"
              date="1 oktober 2024"
            ></LatestUpdate>

            <LatestUpdate
              image="/images/fieldfare-tree.jpg"
              title="Fågelmigration – En Virtuell Fågelexpedition"
              date="29 september 2024"
            ></LatestUpdate>

            <LatestUpdate
              image="/images/herd-of-wildebeest.jpg"
              title="Virtuell Safari: Upptäck Afrikas Djur"
              date="15 september 2024"
            ></LatestUpdate>

            <Link to={"/"} className="data-container">
              <div className="see-more-container">
                <p className="see-more-text">
                  Se mer
                  <span className="arrow-icon"></span>
                </p>
              </div>
            </Link>
          </div>
          <div
            className="scroll-previous-btn"
            onClick={() => scrollPrevious(itemsContainerRef)}
          >
            <button className="previous-btn">Previous picture</button>
          </div>
          <div className="scroll-next-btn">
            <button
              className="next-btn"
              onClick={() => scrollNext(itemsContainerRef)}
            >
              Next picture
            </button>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="info-section">
        <div className="info-container">
          Zoo är Sveriges första digitala djurpark, där du kan interagera med
          och lära dig om djur från alla världens hörn. Utforska våra virtuella
          inhägnader, mata dina favoritdjur, och delta i spännande, lärorika
          aktiviteter som tar dig närmare naturen än någonsin tidigare. Oavsett
          om du är här för att fördjupa din kunskap, eller bara för att njuta av
          den fascinerande djurvärlden, har vi något för dig.
        </div>
        <div className="info-image"></div>
      </section>

      {/* Our animals */}
      <section className="scroll-boxes-section">
        <p className="section-title">Våra djur</p>
        <div className="scrollable-container">
          <div className="items-container" ref={itemsContainerRef2}>
            {animals.map((animal) => (
              <Link
                key={animal.id}
                to={`/animal/${animal.id}`}
                className="data-container"
              >
                <img
                  className="data-image"
                  src={animal.imageUrl}
                  alt={animal.latinName}
                  width={50}
                  height={50}
                  loading="lazy"
                />
                <p className="data-name">{animal.name}</p>
              </Link>
            ))}
            <Link to={"/animals"} className="data-container">
              <div className="see-more-container">
                <p className="see-more-text">
                  Se mer
                  <span className="arrow-icon"></span>
                </p>
              </div>
            </Link>
          </div>
          <div
            className="scroll-previous-btn"
            onClick={() => scrollPrevious(itemsContainerRef2)}
          >
            <button className="previous-btn">Previous picture</button>
          </div>
          <div className="scroll-next-btn">
            <button
              className="next-btn"
              onClick={() => scrollNext(itemsContainerRef2)}
            >
              Next picture
            </button>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="info-section">
        <div className="info-container">
          "Zoo är fantastiskt! Mina barn älskar att mata djuren och lära sig om
          dem. Det är som att besöka en riktig djurpark, fast från hemmet."
          <span className="info-writter">Emma S.</span>
        </div>
        <div className="review-image"></div>
      </section>
    </>
  );
};
