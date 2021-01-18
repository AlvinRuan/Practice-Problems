//Great for working with Integer Sorting

function getDigit(num,place) {
  return Math.floor(num / (Math.pow(10,(place)))% 10);
}
// getDigit(123,0);

function digitCount(num) {
  let digits = 0;

  while (num >= 1) {
    num = num/10;
    digits+=1;
  }
  return digits;
}

// digitCount(123413);

function mostDigits(array) {
  let most = 0;
  for (var i = 0; i < array.length; i++) {
    if (digitCount(array[i]) > most) {
      most = digitCount(array[i]);
    }
  }
  return most;
  }

function radixSort(array) {
  
  let maxDigits = mostDigits(array);
  
  for (var a = 0; a < maxDigits; a++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (var j = 0; j < array.length; j++) {
      digitBuckets[getDigit(array[j],a)].push(array[j]);
    }
    console.log(digitBuckets);
    array = [].concat(...digitBuckets);
//Time complexity 
// Best and Worst are O(k*n)
// n = length of array
// k = the number of digits(average)    console.log(array);
  }
}


radixSort([4234,234,13242,1,234,67,3452,876,32452452,56546,4343,7676]);

