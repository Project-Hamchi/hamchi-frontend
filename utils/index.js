export const arrayToObject = function (array) {
  const object = {};

  for (let i = 0; i < array.length; i++) {
    object[array[i]._id] = array[i];
    delete object[array[i]._id]._id;
  }

  return object;
};

export const byIndex = function (array) {
  const indexes = {};

  for (let i = 0; i < array.length; i++) {
    indexes[array[i]._id] = i;
  }

  return indexes;
}
