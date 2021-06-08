/* the Challenge: Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g*/
//searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch"

//The .replace() method is used to return a new string with some or all matches of a patternreplaced by a replacement. It accepts either a regular expression(regex) pattern or a string for replacement. It is used as shown below.

function searchReplace(str, word, newWord){
    //we use an if statement to check of the first letter of the word word[0] matches the uppercase equivalent word[0].toUpperCase() of the letter. 
    if(word[0]=== word[0].toUpperCase()){
        //If it does, we convert the first letter of the newWord(replacement) to uppercase and append the rest of the lowercase letters retrieved using the .slice() method.

        //.slice() when used on a string extracts a section of the string and returns it as a new string. It receives two arguments; the beginning index which is compulsory and the end index which is only optional.
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }

    //Once we now have the newWord in same case as the word to be replaced, we call the .replace() method on the sentence passing in the word to be replaced word and the replacement newWord. This returns a new sentence with the words swapped appropriately. Thus, we return it from our function as the final result.
    return str.replace(word,newWord)
}


function searchReplace(str, word, newWord){
    //Notice how we use the RegExp() constructor function to create a regular expression out of the word to be replaced. This we store as regex. Note: **g** and **i** as specified in the second argument are regular expression flags with the following meanings. | g | - Global search(look in the whole string and return all matches) | | --- | --- | | i | - Case-insensitive search. |
    let regex = new RegExp(word, 'gi')
    //Next, using a regular expression /[A-Z]/ within the if statement, we test to see if the first letter in the word is capitalized. If it is, we adjust the replacement newWord accordingly.
    if(/[A-Z]/.test(word[0])){
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
    //At the end, knowing that the .replace() method may accept a regular expression specifying the pattern to be searched for, we call the .replace() method on the sentence passing in regex and the newWord. This gives us a new string(sentence) with the appropriate replacement and so we return it as such.
    return str.replace(regex,newWord)
}

//Results: From the result, we notice that the faster solution is the first approach where we simply replace the word using **.replace()** ,while the regular expression method is approximately 72% slower.

//practical use: "Search and Replace" finds it's application mostly in word processing applications where a user may need to manipulate content by searching out and replacing every occurrence of a certain word. It is also a valid coding interview challenge.

module.exports = searchReplace