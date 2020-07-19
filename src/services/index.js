export const fetchHero = (code) =>
  fetch(
    `https://salty-woodland-05776.herokuapp.com/api/v1/heroes` +
      getQueryString(code)
  );

export const fetchTimeout = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const getQueryString = (code) => {
  return `?code=${code}`;
};
