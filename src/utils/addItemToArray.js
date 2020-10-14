export const add = (state, obj) => {
  let check = false;
  let arr = [...state];
  if (obj.name && obj.AddressBip) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].AddressBip == obj.AddressBip) {
        check = true;
        break;
      }
    }
    if (!check) {
      arr.push(obj);
      return arr;
    } else {
      return arr;
    }
  } else {
    return arr;
  }
};
