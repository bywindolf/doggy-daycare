export const fetchDogs = async () => {
  const results = await fetch("https://majazocom.github.io/Data/dogs.json");
  const data = await results.json();

  return data;
};
