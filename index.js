function swapping(arr, i, counter) {
  
  let temp = arr[i];
  arr[i] = arr[counter];
  arr[counter] = temp;

  return arr;
}

function pivoter(arr, start=0, end=arr.length) {

  let pivot = arr[start]; //4
  let counter = start;
  
  for (var i = start+1; i<end; i++) {
    if (arr[i] < pivot) {
    counter++;
    swapping(arr,i,counter);
// -----------------------------------------------
//     let temp = arr[i];
//     arr.splice(i,1);
//     arr.unshift(temp);
//     counter++;
// -----------------------------------------------
    }
  }

  swapping(arr,counter,start);
//   console.log(arr);
  return counter;
}

// 3

pivoter([9,4,8,2,1,5,7,6,3]);

function quickSort(arr) {
  
//   if (pivoter(arr) === 0) {
//     return arr;
//   }

  quickSort(pivoter(arr));
  console.log(arr);
}

// quickSort([4,6,9,1,2,5,3]);