export const convertDataToObject = (transactions) => {
  const newTransactions = transactions.reduce((total, item) => {
    if (!total[`${item.date}`]) {
      total[`${item.date}`] = [];
      total[`${item.date}`].push(item);
    } else {
      total[`${item.date}`].push(item);
    }
    return total;
  }, {});

  let arr = [];

  for (m in newTransactions) {
    arr.push(m);
  }

  arr.sort((a, b) => parseInt(b) - parseInt(a));
  // let obj = {};
  // for (i = 0; i < arr.length; i++) {
  //   obj[`${arr[i]}`] = newTransactions[`${arr[i]}`];
  // }

  return [newTransactions, arr];
};
