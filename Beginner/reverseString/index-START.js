/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



//split the received text into an array of characters, reverse the order of array’s elements and join the elements of the reversed array
function reverseString(text) {
    return text.split('').reverse().join('')
}

// spread operator  like the .split() method will spread the characters of the string into array elements.
function reverseString(text) {
    return [...text].reverse().join('')
}

//initialize the iterating variable i to the length of the string -1 . Since the index begins from zero, this gives us the index of the last character in the string. We simply append this last character to our result variable which is an empty string and continue the cycle until we are past the first character of the string i.e i is no longer greater than or equal to 0.
function reverseString(text){
    let result =''
    for (let i = text.length-1; i >=0; i--){
        result += text[i]
    }
    return result
}

//run through each character in the text received and append it to the beginning of a new variable result which we return on completion as it now holds the reversed string.

function reverseString(text){
    let result =''

    for(let char of text){
        result = char + result
    }
    return result
}

//The recursive function we created continuously breaks down the problem into smaller chunks until it reaches the terminating condition. We continuously remove and return the first character on each call and re-execute the function on what is left. Notice that at the end we have successfully returned every character in the string and joining them together from the last call upwards, gives us the string in reverse i,e “edoc”. Bear in mind that the last string is empty.
function reverseString(text){
    if(text === ''){
        return ''
    }else {
        return reverseString(text.substr(1)) + text[0]
    }
}

//we split the text received into an array of characters and then we call the .reduce() method on the array which begins with an empty string as the initial value and accumulates each character in reverse until it has gone through all characters in the array. At this point, it returns the completely reversed string.
function reverseString(text){
    return text.split('').reduce((acc,char)=> char + acc,'')
}
//or
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}


module.exports = reverseString


//From the test carried out, the fastest solution we have considered is using the .reduce() method. Next, is the for-loop method which is only 6% slower and is a pretty close one. The slowest of them all is the method of chaining .split(), .reduce() and .join(59% slower).