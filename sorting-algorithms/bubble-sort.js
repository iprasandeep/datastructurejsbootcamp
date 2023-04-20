// Bubble Sort 
// - A sorting algorithm where ther larger values bubble up to the top!

// ex: 29, 10, 14, 30, 37, 14, 18


// Pseudocode

/*
- Start looping from with a variable called i the end of the array towards the beginning
- start an inner loop with a variable caled j from the begining until i-1
- if arr[j] is greater than arr[j+1], swap those two values!
- return the sorted array
*/

// implementation

function bubbleSort(arr){
    for(let i = arr.length; i>0; i--)
    {
        let noswaps;
        for(let j = 0; j<i-1; j++)
        {
            noswaps = true;
            if(arr[j]> arr[j+1])
            {
                let temp  = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noswaps = false;
            }
        }
    }
    return arr;
}
let nums = [37, 45, 29, 8];
let ans = bubbleSort(nums);
console.log(ans);



/*

Time Complexity: O(N^2)
Space: O(1)

*/ 