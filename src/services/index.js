export const fetchHero = (code) =>
  fetch("http://localhost:5000/api/v1/heroes" + getQueryString(code));

export const fetchTimeout = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const getQueryString = (code) => {
  return `?code=${code}`;
};
