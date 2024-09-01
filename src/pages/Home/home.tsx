import { useEffect, useState } from "react";
import { IAnimalExt } from "../../models/IAnimalExt";
import { getStoredAnimals } from "../../utils/getStoredAnimals";
import { Link } from "react-router-dom";

export const Home = () => {
  const [animals, setAnimals] = useState<IAnimalExt[]>([]);

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
      <section className="scroll-boxes-section">
        <p>Våra djur</p>
        <div className="scrollable-container">
          <div className="items-container">
            {animals.map((animal) => (
              <Link
                key={animal.id}
                to={`/animal/${animal.id}`}
                style={{ backgroundImage: `url(${animal.imageUrl})` }}
                className="animal-container"
              >
                <h3>{animal.name}</h3>
              </Link>
            ))}
            <div className="animal-container">
              <h3>test</h3>
            </div>
          </div>
          <div className="scroll-previous-btn">
            <button className="previous-btn">Previous picture</button>
          </div>
          <div className="scroll-next-btn">
            <button className="next-btn">Next picture</button>
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
      {/*  */}
      <section className="scroll-boxes-section">
        <h3>hehe</h3>
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
