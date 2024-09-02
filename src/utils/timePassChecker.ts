export const timePassChecker = (timestamp: string): boolean => {
  const lastFedTime = new Date(timestamp);
  const currentTime = new Date();
  const expiryTime = new Date(lastFedTime.getTime() + 3 * 60 * 60 * 1000);

  return currentTime >= expiryTime;
};
