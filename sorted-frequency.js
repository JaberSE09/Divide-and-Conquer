function sortedFrequency(array , number) {
    let count=0
    array.forEach(element => {
        if(element === number) count++
    });

    if(count > 0) return count
    else if (count === 0) return -1 
}

module.exports = sortedFrequency