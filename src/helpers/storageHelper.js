const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  const storedItem = localStorage.getItem(key);

  if (!storedItem) return null;

  try {
    const item = JSON.parse(storedItem);
    return item;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

const remove = (key) => {
  localStorage.removeItem(key);
};

const clear = () => {
  localStorage.clear();
};

export const storageHelper = {
  save,
  get,
  remove,
  clear,
};
