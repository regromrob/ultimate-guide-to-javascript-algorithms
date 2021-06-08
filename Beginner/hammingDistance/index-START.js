/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

//The hamming distance between two strings of equal length is the number of positions at which these strings vary. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another. 
   //hammingDistance('rover', 'river') // should return 1


function hammingDistance(stringA, stringB) {
    let result = 0
//we add a check to ensure that the characters received are of equal length
    if(stringA.length == stringB.length){
        //In this approach, we use a for-loop as shown below to loop through every character of stringA while comparing each character with the character in their corresponding position for stringB.
        for(let i= 0; i< stringA.length; i++){
            //also convert all characters to lowercase before comparing them in order to avoid errors due to varying letter cases.
            if(stringA[i].toLowerCase() != stringB[i].toLowerCase()){
                result++
            }
        }
        return result
    }else{
        throw new Error('Strings do not have equal length')
    }
}



module.exports = hammingDistance

//practical aplication: The hamming distance algorithm finds its application in telecommunication for error detection and correction. It is used to determine the number of distorted bits in a binary word as a way to estimate error. In the biological realm, it is also used to determine genetic distance. In software engineering, it is a common code challenge for JavaScript interviews and could also come in handy for developing word games in the real world.