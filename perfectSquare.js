// You might know some pretty large perfect squares. But what about the NEXT one?

// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// For example:
const perfectSquare = (num)=> {
    if(!Number.isInteger(Math.sqrt(num))) return -1
     return (Math.pow((Math.sqrt(num)+1), 2))
}
console.log(perfectSquare(289)) // should return 16 (3x3=9, 4x4=16)

// perfectSquare(289) // should return 324 (17x17=289 18x18=324)

//perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)