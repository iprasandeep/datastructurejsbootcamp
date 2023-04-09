// [-2,-1,-1,0,1] // 4

// [1,1,1,1,1,2] // 2


function countUniqueValue(arr){
    let i  = 0;
    for(let j = 1; j<arr.length; j++)
    {
        if(arr[i] !== arr[j])
        {
            i++;
            arr[i] = arr[j];            
        }
        // console.log(i, j);
    }
    return i+1;
}


let res = countUniqueValue([1,1,1,2,4,5,6]);
console.log(res);
