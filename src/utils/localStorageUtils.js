const LOCALSTORAGE_KEY = 'teaLeafSettings';

export const readFromLocalStorage = () => {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  return JSON.parse(data);
};

export const writeToLocalStorage = (data) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};