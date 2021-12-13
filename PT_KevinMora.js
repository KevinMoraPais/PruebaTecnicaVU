function returnLog(array) {
  console.log(array.toString().replace(/,/g, ""));
}
function func(number) {
  numberArray = [];
  completeArray = [];
  let arrLength;
  for (let i = 1; i < number + 1; i++) {
    numberArray.push(i);
    switch (i) {
      case 1:
        setTimeout(() => {
          completeArray = [
            ...numberArray,
            ...numberArray.slice(0, numberArray.length - 1).reverse(),
          ];
          arrLength = Math.floor(completeArray.length / 2);
          returnLog(completeArray);
        }, 0);
        break;
      case 2:
        setTimeout(() => {
          completeArray.splice(arrLength, 1, " ");
          returnLog(completeArray);
        }, 0);
        break;
      case 3:
        setTimeout(() => {
          completeArray.splice(arrLength - 1, 3, "   ");
          returnLog(completeArray);
        }, 0);
        break;
      case 4:
        setTimeout(() => {
          completeArray.splice(arrLength - 2, 3, "     ");
          returnLog(completeArray);
        }, 0);
        break;
      case 5:
        setTimeout(() => {
          completeArray.splice(arrLength - 3, 3, "       ");
          returnLog(completeArray);
        }, 0);
        break;
      default:
        console.log("Welp");
    }
  }
}
func(5);
