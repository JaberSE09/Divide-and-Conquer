function findFloor(arr , x) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] <= x) {
            result = arr[mid];  // potential floor value
            low = mid + 1;      // try to find a closer value to x on the right side
        } else {
            high = mid - 1;     // continue search on left side
        }
    }

    return result; // result is either the floor value or -1 if not found
}

module.exports = findFloor