export const getJokes = async (jokesNumber) => {
  const response = await fetch(`http://api.icndb.com/jokes/random/${jokesNumber}?limitTo=[nerdy,explicit]`);
  const data = await response.json();
  const jokes = data.value;
  return jokes;
}