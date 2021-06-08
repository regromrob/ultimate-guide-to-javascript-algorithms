/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    //Next, we convert all letters of the string to lowercase, then call the .split() method on the string that is received passing in an empty string as the only argument in order to spread the characters into an array.Next, we call .reverse() on the array to re-order its elements in reverse.After that, we call .join() on the reversed array to form a string once again.
    const reversedText =text.toLowerCase().split('').reverse().join('')

    //At the end we return the result of our comparison which is a Boolean indicating whether the string that was passed in equals the reversed string we created. This tells us if the text that was passed in is a palindrome.
    return text === reversedText
}

function palindromeChecker(text) {
    //First, We convert all letters of the string to lowercase, then use the .split() method once again to spread the characters of the string into an array.
    let charArray = text.tolowerCase().split('')

    // Next we use a special array method .every() to loop through the array and perform our check. Basically, the .every() method tests whether all elements in the array pass the test implemented by the provided function. The provided function in our case accepts the current letter and its index in the array as parameters. Then we return the result of the comparison between the letter and the letter currently occupying the position this letter would assume if the string was reversed. Learn more about .every() here.
    let result = charArray.every((letter, index)=>{
        return letter === charArray[charArray.length - index - 1]
    })
//Cumulatively, the .every() method would evaluate to true if the test passes in all cases and false if it didn't. The result of that evaluation is what we store in the variable result and that's what our function returns as an indication that the string failed or passed the palindrome check.
    return result
//There's something wrong with our second implementation performance-wise. Did you notice? Can you identify the problem?
    // you'd notice that once you loop beyond the character at the middle position, you start repeating comparisons you've already gone through in the first half of the iteration. That's redundant, don't you think?
}

//problem fixed

//To fix this, we'd add a check to ensure that we stop looping once we get to the mid-point of the string.
//we fix this problem by using a for-loop to iterate through the string of text only up till the mid point while carrying out our usual comparison
function palindromeChecker(text) {
    var textLen = text.length;
    for (var i = 0; i < textLen/2; i++) {
      if (text[i] !== text[textLen - 1 - i]) {
          return false;
      }
    }
    return true;
   }


   //The fixed loop method is the fastest implementation considered. The un-optimized loop method initially considered comes in second place and is approximately 47% slower, while the seemingly intuitive approach is the slowest of them all (87% slower).

module.exports = palindromeChecker;