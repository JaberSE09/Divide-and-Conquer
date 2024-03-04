function findRotationCount(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        // Check if mid element is the minimum (point of rotation)
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    // At the end of the loop, low/high will be pointing to the minimum element
    return low;
}

module.exports = findRotationCount