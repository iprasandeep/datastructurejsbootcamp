function findMinInRotatedArray(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] < arr[right]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return arr[left];
  }

const arr = [4, 5, 6, 7, 0, 1, 2];
const min = findMinInRotatedArray(arr);
console.log(min); 