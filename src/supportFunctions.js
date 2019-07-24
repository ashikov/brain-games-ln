const getRandomIntInclusive = (minimumValue = 1, maximumValue = 100) => {
  const min = Math.ceil(minimumValue);
  const max = Math.floor(maximumValue);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomIntInclusive;
