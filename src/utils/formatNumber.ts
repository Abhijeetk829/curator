const formatNumber = (num: number) => {
  let str = num.toString();

  if (str.length <= 3) return str;
  let lastThree = str.slice(-3);
  let rest = str.slice(0, -3);
  let result = "";

  while (rest.length > 2) {
    result = "," + rest.slice(-2) + result;
    rest = rest.slice(0, -2);
  }
  result = rest + result;
  return result + "," + lastThree;
};

formatNumber.displayName = "formatNumber";
export default formatNumber;
