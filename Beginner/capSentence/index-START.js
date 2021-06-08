/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


//note: **.slice()** when used on a string extracts a section of the string and returns it as a new string. It receives two arguments; the beginning index which is compulsory and the end index which is only optional.

//The **.forEach()** method in JavaScript runs a provided function on each element within an array.
function capSentence(text) {
  //we call the .toLowerCase() method on the string of text received to convert the entire sentence to lowercase. We also chain the .split() method in sequence to divide the lowercase sentence into an array of words as shown below. This array is stored as wordsArray.
   let wordsArray = text.toLowerCase().split(' ')
   let capsArray =[]
//using the .foreach() method, we iterate through every word(element) in the array and execute a function on it. The function takes the first letter of the word and turns it to uppercase using the .toUpperCase() method. To retrieve the remaining part of the word in lowercase, we use the .slice() method to slice the string starting from position 1 till the end.
   wordsArray.forEach(word => 
    //We combine the transformed first letter and the sliced section together to form the capitalized word which we push into our array of capitalized words capsArray.
// capsArray now holds the capitalized version of every word in the sentence.
    { capsArray.push(word[0].toUpperCase() + word.slice(1))
     
   });
   //we combine each word(element) using the .join() method. We pass in an empty space as the separator. This gives us the capitalized sentence which we return in conclusion.
   return capsArray.join(' ')
}


//The .map method is used to create a new array with the results gotten from calling a provided function on every element in the array on which it is called.
function capSentence(text) {
  function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    //This time we use the .map() function to loop through every word in the array and execute the same function as before in order to create capsArray, which is an array of the capitalized words.
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })
    //In the end we return a capitalized sentence created by joining the words in the capsArray with blank space as the separator.
    return capsArray.join(' ')
}
}

//note: .replace() is used to create a new string with some or all matches of a **pattern** replaced by a **replacement**. The pattern and replacement are passed in as arguments when this method is called.
function capSentence(text) {
  function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
//In this approach we use the .map() method as above to execute a function on every word(element) in the wordsArray.
    let capsArray = wordsArray.map( word=>
      //we replace the first letter of each word(word[0]) with an uppercase version of this same letter. Then we add the capitalized word using the .push() method to the capsArray.
      {return  word.replace(word[0], word[0].toUpperCase())})

    return capsArray.join(' ')
    }

}



module.exports = capSentence

//Our test reveals that using the .map() and .slice() method is the fastest. Next, is .forEach() which is approximately 15% slower. And last, is the .map() and .replace() which is 29% slower.