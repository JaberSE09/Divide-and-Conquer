function countZeroes(arr) {
    let count = 0
    arr.forEach(element => {
        if (element === 0) {
            count++
        }
    });
  return count
}



module.exports = countZeroes