export const formatDate = (dateStr: string) => {
  const date: Date = new Date(dateStr);

  const formattedData: string = date.toLocaleString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return formattedData;
};
