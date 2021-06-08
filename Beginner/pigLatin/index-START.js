/*CHALLENGE: Translate the provided string to Pig Latin by following the rules below:
For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway” */


//TWO WAYS: The point is, in imperative programming, you specify how things get done(step-by-step) (FOR LOOP). However, in declarative programming, you simply state(declare) what should be done and aren’t concerned with how it gets done (.REDUCE METHOD).


function pigLatin(str) {
    // Convert string to lowercase to prevent any casing related errors during comparison(“a” does not equal “A”).
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      //we use the .slice() method to manipulate the string to generate the Pig Latin equivalent.
      //The .slice() method is used to extract a portion of an array starting from the specified beginning to end without modifying the original array. It returns a new array containing all elements from the starting index till the end index without including the item at the end index. When no end index is specified it assumes the end of the string as the end index.
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";

      /* - str.slice(vowelIndex) extracts a portion of the string starting from the first vowel(i.e the vowelIndex up till the end.
        -str.slice(0, vowelIndex) extracts the portion of the string starting at index 0(i.e the beginning) up until the first vowel at position vowelIndex. The extracted portion here is the consonant or consonant cluster as the case may be. Note that the .slice() method returns the portion from the starting index to but not including the end index.
        -We combine these extracted portions and affix "``ay``" to the end to form the final result which is returned from the function as such.*/
    }
  }
  



//The **replace()** method returns a new string with some or all matches of a pattern replaced by a specified replacement.
function pigLatin(str) {
    return str
    //.replace(/^([aeiouy])(.*``*)/, '$1$2way')* -_ This statement specifies a replacement to be carried out if the word begins with a vowel. This is specified in the first bracket within the_ *.replace()* method call i.e *([aeiou])*. The second bracket *(.*)* refers to every other character after the vowel. Thus, the expression specifies a pattern for words beginning with a vowel and followed by anything else. When this case is matched, a new string in the format of '``$1$2way``' is generated and used to replace the original srtring. $1 here refers to the first bracket and $2, the second bracket. This means that we simply take the word as it was and affix "``way``" to the end.
    .replace(/^([aeiouy])(._)/, '$1$2way')
    //.replace(/^([^aeiouy]+)(.*)/, '$2$1ay') - This statement specifies that if the word does not start with a vowel i.e ^([aeiouy]+), and is followed by anything else (``*.*)*, it should be replaced with a string formatted in the order '$2$1ay``'. The plus sign in ^([aeiouy]+) caters for a situation where there is a consonant cluster. Thus it represents every non-vowel character at the start of the word. '$2$1ay' generates the new string in the order of remaining characters + consonant cluster + '``ay``'. This gives the Pig Latin equivalent.
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')

    //Note that we chain both .replace() methods in succession such that both cases are tested and only the one that matches will be evaluated further.
}

//RESULTS: The result of our comparison reveals that the fastest solution is the Imperative approach and the declarative approach is approximately 88% slower.


//in practice: Pig Latin although not a formal language is mostly used as an obfuscation technique in games. This means that it is used to pass messages across in a coded form, thus reducing the readability and preventing it from being easily interpreted. It may also be encountered as an interview challenge testing ones string manipulation capabilities.




module.exports = pigLatin
