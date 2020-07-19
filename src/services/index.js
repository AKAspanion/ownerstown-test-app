export const fetchHero = (code) =>
  fetch(`${process.env.REACT_APP_API_URL}api/v1/heroes` + getQueryString(code));

export const fetchTimeout = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const getQueryString = (code) => {
  return `?code=${code}`;
};
