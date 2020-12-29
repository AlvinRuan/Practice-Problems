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

mostDigits([123413,232,4123431,242]);