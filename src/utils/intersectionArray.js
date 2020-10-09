export const intersectionArray = (arr1, arr2, condition) => {
  return arr1.filter((item) => {
    let result = false;
    for (let i = 0; i < arr2.length; i++) {
      if (item[condition] == arr2[i][condition]) {
        result = true;
      };
    }
    return result;
  });
};
