


// Write a function called hasDuplicate which accepts an array 
// and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
    return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false


// Write a function called vowelCount which accepts a string 
// and returns a map where the keys are numbers and the values 
// are the count of the vowels in the string.

function vowelCount(str){
    const word = str.toLowerCase()
    const vowels = 'aeiou'
    const vowelMap = new Map()
    
    for (let letter of word) {
        if (vowels.includes(letter)){
            if (vowelMap.has(letter)){
                vowelMap.set(letter, vowelMap.get(letter) + 1)
            } else {
                vowelMap.set(letter, 1)
            }
        }
    }
    return vowelMap
}
console.log(vowelCount('AARON'))






