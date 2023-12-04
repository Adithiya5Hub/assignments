/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
    let n2 = str2.length;
    if(n1!==n2){
        console.log("Invalid Input");
       
    }
   const string1 = str1.split('').sort().join('');
   const string2 = str2.split('').sort().join('');
   return string1 === string2;
}
var answer = isAnagram("rasp","spare");
if (answer) {
    console.log("They're anagrams");
} else {
    console.log("They're not anagrams");
}
module.exports = isAnagram;
