// Storage service - provides an interface for localStorage

export function getItem(key) {

  return JSON.parse(localStorage.getItem(key));

}

export function setItem(key, value) {

  return localStorage.setItem(key, JSON.stringify(value));

}

export function removeItem(key) {

  return localStorage.removeItem(key);

}
