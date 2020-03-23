module.exports = function reverse (n) {
  if (n < 0){
    n = -n;
  } 
  let string = n.toString()
  let arr = string.split('');
  
  arr.reverse();
  return arr.join('');
}
