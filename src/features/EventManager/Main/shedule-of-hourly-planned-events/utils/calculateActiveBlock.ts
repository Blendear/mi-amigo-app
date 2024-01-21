const calculateActiveBlock = (currentTime) => {
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  return hours * 4 + Math.floor(minutes / 15);
};

export default calculateActiveBlock;
