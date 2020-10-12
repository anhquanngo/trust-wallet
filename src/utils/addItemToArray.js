export const add = (arr, obj) => {
    let check = false;
    for (let i =0 ; i < arr.length; i++) {
      if (arr[i].AddressBip == obj.AddressBip) {
        check = true;
        break;
      }
    }
    if (!check) {
      arr.push(obj);
      return arr;
    }
  }