export const handleImageNotFound = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = "./images/image-not-found.jpg";
};
