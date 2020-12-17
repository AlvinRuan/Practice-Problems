

function pivoter(arr, start=0, end=arr.length+1) {

  function swapping(arr, i, counter) {
  let temp = arr[i];
  arr[i] = arr[counter];
  arr[counter] = temp;

  return arr;
}

  let pivot = arr[start]; //4
  let counter = start;
  
  for (var i = start+1; i<=end; i++) {
    if (arr[i] < pivot) {
    counter++;
    swapping(arr,i,counter);
    }
  }

  swapping(arr,counter,start);

  return counter;
}


// pivoter([9,4,8,2,1,5,7,6,3]);

function quickSort(arr, left = 0, right = arr.length-1) {
  console.log(left, right);
  if (left < right) {
    
    let pivotIndex = pivoter(arr,left,right); //3
    left
    quickSort(arr,left,pivotIndex-1);
    right
    quickSort(arr,pivotIndex+1,right);
  }
  return arr;
}

quickSort([100,-3,9,4,8,2,1,5,7,6,3]);
