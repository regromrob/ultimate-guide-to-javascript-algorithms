/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

//A word is said to be an anagram of another when it can be formed by rearranging the letters of the other word using each letter just once. E.g listen is an anagram of silent.


//To clean up the string, we create a function sanitizeString. This function accepts the string to be sanitized as a parameter and the uses the .toLowerCase(), .replace(), .split(), .sort() and .join() methods to manipulate the string as shown below:
const sanitizeString = function (str) {
    /*First, we convert the entire string to lowercase using the .toLowerCase() method.
    we use the .replace() method to search through the string using the specified regular expression pattern and replace every non alphabetical character with an empty string. This leaves us with only letters. No spaces, no symbols!
    we call .split() to split the string into an array of characters.
    Using the .sort() method, we sort the letters (elements) within the array in alphabetical order.
    And finally, we join the now alphabetically ordered array of letters back together to form a string once again. */

    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');

   
}


function isAnagram(stringA, stringB) {
    const sanitizedString = function(str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    }
     // Sanitizing the string as done above is perhaps the trickiest part of this solution. Next, we simply clean up the strings received using the sanitizeString function and compare the results. If both strings match, we return true signifying that they pass as anagrams. If they do not match, we return false signifying that they aren't.
    return sanitizeString(stringA) === sanitizeString(string)
}

//As used in this context , a character map object is an object that maps every character in a string to the number of times it occurs within the string.

//in our createCharMap function below, we use a for…of loop to iterate through each character of the string received.

function createCharMap(text) {
    let charMap = {}

    for (let char of text) {
        //For each character, we check if the character already exist as a property in the charcter map charMap using the .hasOwnProperty() method. If it does, we increment it's value and if it doesn't, we add the character as a property and set it's value to 1.
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
//In the end, we return charMap which is the character map object.
    return charMap
}

function isAnagram(stringA, stringB) {
   
    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }
//Notice that we first check if the length of both strings are equal. If they aren't, we return false as this is an indicator that they can never be anagrams.
    if(stringA.length === stringB.length){

        //If they are however, we go further to generate their character maps stored as variables stringAMap and stringBMap.
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)

        //Next, we use the for…in loop to compare every character and value in stringAMap to the character’s corresponding value in stringBMap. If any values do not match, we return false as an indication that the strings aren't anagrams. However, if all values match, the test is passed and we return true as an indication that the tested strings are anagrams indeed.
        for(let char in stringMap){
            if(stringAMap[char] !== stringBMap[char]){
                return false
            }
        }
        return true
    }else{
        return false
    }
}

//result: The faster implementation is the Character Map Comparison approach and the Direct Comparison method though concise is approximately 52% slower.
module.exports = isAnagram

/*in Practice: The algorithms explored above may be applied in various ways. These include:

Encryption
Password Generation
Trusted Time-stamping
Coding Interviews
Generating Mnemonics
Word games */