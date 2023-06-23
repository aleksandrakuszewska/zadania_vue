const arrA = [];
const arrB = [];

const filteredArrA = arrA.filter((x) => !arrB.includes(x));
const filteredArrB = arrB.filter((x) => !arrA.includes(x));

const result = filteredArrA.concat(filteredArrB);
