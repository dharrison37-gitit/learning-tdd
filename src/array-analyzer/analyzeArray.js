const analyzeArray = (array) => {
  const length = array.length;

  const sum = array.reduce((total, number) => {
    return total + number;
  }, 0);

  const average = sum / length;

  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
