 //Key Points

// much faster than linear search
// Binary search work only for sorted array

function binarySearchIterative(nums, target){
    let left = 0;
    let right = nums.length-1;

        while(left<=right){
            let mid  = Math.floor((left+right)/2);
            if(nums[mid] === target)
            {
                return mid;
            }
            if(target > nums[mid])
            {
                left = mid-1;
            }
            else {
                right = mid+1;
        }
    }
    return -1;
}
let nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let target = 12;
const resultIndex = binarySearchIterative(nums, target);
console.log("Target value found at index:", resultIndex);



//   [1,2,3,4,5]
//    S   M   E