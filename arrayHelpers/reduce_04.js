/**
 * 
 * @param {array} array 
 * This function convert an array with repeated numbers into an array with unique numbers
 */
function unique(array) {
  return array.reduce((prev, value) => {
      
      var existing = prev.find((n) => {
          return n == value;
      });
      
      if(!existing){
          prev.push(value);
      }
      return prev;
  }, [])
}