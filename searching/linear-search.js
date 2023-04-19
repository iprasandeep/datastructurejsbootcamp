function linearSearch(nums){
    let key = 5;
    for(let i = 0; i<nums.length; i++)
    {
        if(nums[i] === key)
        {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,5,6]));


// Best Case  - O(1)
// Worst Case - O(n) if array have millions of data
// Average Case - O(n)
