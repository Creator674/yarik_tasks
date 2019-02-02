module.exports = function filterArray(array) {
  // твое решение здесь
  var arr1 = [];
  for ( var i = 0; i<array.length; i++){
    if ( array[i] % 2 == 1){
      arr1.push(array[i]);
  }
}
  return arr1
}