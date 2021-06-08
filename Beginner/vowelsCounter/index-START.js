/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// declared a constant "Vowels" 
const Vowels = ['a','e', 'i', 'o', 'u']
function vowelsCounter(text) {
    let counter =0

        // Loop through text to test if each character is a vowel
    for(let letter of text.toLowerCase()){
        if(vowelsCounter.includes(letter)){
            counter++
        }
    }
    // Return number of vowels
    return counter
}


function vowelsCounter(text){
        // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi)
    // Check if matching instances exist then calculate length
    if(matchingInstances){
                // Return number of vowels
        return matchingInstances.length
    }else{
        return 0
    }
}


module.exports = vowelsCounter;

//The Regex Method is approximately 88% faster than The Iterative Approach to solving this problem. Thus, it is a more optimal solution.

