function setLocaleData(key, value) {
  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : value
  );
}

function getLocaleData(key) {
  let data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}

function getNewId() {
  return (getLocaleData('lastId') || 0) + 1;
}
