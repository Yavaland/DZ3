function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) 
  {
    if (typeof arr[i] === "number")
    {sum += arr[i];}
    else if (Array.isArray(arr[i])) 
    {sum += sumArr(arr[i]);} 
  }
  return sum;
}

let testArr = [5, 7, [4, [2],8,[1,3],2],[9,[]],1, 8];
console.log(`Сумма чисел массива: ${sumArr(testArr)}`);


