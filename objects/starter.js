// Big O of Objects

// Insertion - O(1);
// Removal -  O(1)
// Searching - O(N)
// Access - O(1)

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    fvoriteNumbers: [1,2,3,4]
}
let ans = instructor.hasOwnProperty("firstName");
console.log(ans);
