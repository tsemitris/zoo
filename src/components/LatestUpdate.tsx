import { Link } from "react-router-dom";

interface ILatestUpdateData {
  image: string;
  title: string;
  date: string;
}

export const LatestUpdate = ({ image, title, date }: ILatestUpdateData) => {
  return (
    <>
      <Link to={`/`} className="data-container">
        <img
          className="data-image"
          src={image}
          width={50}
          height={50}
          loading="lazy"
        />
        <p className="data-title">{title}</p>
        <p className="data-publish-date">{date}</p>
      </Link>
    </>
  );
};
