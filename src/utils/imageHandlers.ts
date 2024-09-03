export const handleImageNotFound = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const imgElement = e.currentTarget;

  if (imgElement.dataset.errorHandled) return;

  imgElement.src = "./images/image-not-found.jpg";
  imgElement.dataset.errorHandled = "true";
};
