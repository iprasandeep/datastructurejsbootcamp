// input: hello
// output: { h: 1, e: 1, l: 2, o: 1 }

function charCount(str){
    let result = {};
    for(let i = 0; i<str.length; i++)
    {
        let char = str[i];
        if(result[char]>0)
        {
            result[char]++;
        }
        else result[char] = 1;
    }
    return result;
}

console.log(charCount("hello"));