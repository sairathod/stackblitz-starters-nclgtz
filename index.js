for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('amazon');
  } else if (num % 3 === 0) {
    console.log('google');
  } else if (num % 5 === 0) {
    console.log('facebook');
  } else {
    console.log(num);
  }
}
