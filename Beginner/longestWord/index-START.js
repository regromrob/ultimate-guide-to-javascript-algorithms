/* CHALLENGE
Given a sentence, return the longest word in the string. E.g
longestWord('Top Shelf Web Development Training on Scotch') should return 'Development'

*/




function longestWord(text) {
    //we first separate the sentence into an array of words using the .split() method
    let wordArray = text.split(' ')
    //We use the variable maxLength to hold the maximum length encountered at each point of iteration using the for-loop. It is initially set to 0.
    let maxLength = 0
    let result =''
//Notice that the for loop is set up to execute for as long as the iterator is less than the length of the array. Since array indices are zero-based, if we had an array containing 5 words, that enables us loop through positions 0-4
    for(let i = 0; i< wordArray.length; i++){
        //Within the for-loop, we check if the length of the current word under evaluation wordArray[i] is greater than our maxLength. If it is, we replace the maxLength with the newly found maximum and store the word in a variable result.
        if(wordArray[i].length >maxLength){
            maxLength = wordArray[i].length
            //At the end of the iteration, result now holds the longest word in the sentence, hence it is returned as such.
            result = wordArray[i]
        }
    }
    return result
}

//The **.reduce()** method is used to execute a certain piece of code (function) on all the elements in an array in order to cummulatively arrive at a single value.
function longestWord(text) {
    var result = text.split(' ').reduce((maxLengthWord,currentWord) => {
        //ithin the reducer function, we compare the length of the current word under evaluation with the length of our accumulator variable maxLengthWord which is set to an empty string at the start. 
        if (currentWord.length > maxLengthWord.length) {
            //Whenever the length of the current word is greater, we return the current word as the new accumulator value otherwise the accumulator retains it's original value into the next comparison.
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")

    //At the end of the reduction, result now holds the longest word in the sentence and is returned accordingly.
    return result
}

//The **.sort()** method sorts the elements of an array and returns the sorted array. It receives an optional parameter which is a function that specifies the order in which sorting should be carried out.
function longestWord(text) {
    // In this solution, we use this method to rearrange the array of words from the sentence in the order of decreasing length, such that the first element in the array becomes the longest word.
   let sortedArray= text.split(' ').sort((wordA,wordB)=>
   //Notice that within our compare function, we subtract the length of the second word from that to the first. This gives us a positive, negative or 0 value that determines which word is longer and by extension which should come before the other.
   wordB.length - wordA.length)

   //we now have a sortedArray with the words arranged in descending order according to their length. We return the word(element) occupying the first position in this array as this is the longest word.
   return sortedArray[0]
}


//results: The screenshot above reveals that the for-Loop and **.reduce()** implementations perform best and are the fastest with really close performance values. The **.sort()** method on the other hand, is 83% slower than both methods.

module.exports = longestWord

//The techniques considered in this challenge are applicable in coding interviews and may be applied in evaluating the complexity of a piece of text. They may also be used in word games for scoring.