
export const fetchHero = (code) =>
  fetch(`${process.env.PROD_SERVER}api/v1/heroes` + getQueryString(code));

export const fetchTimeout = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const getQueryString = (code) => {
  return `?code=${code}`;
};
