function reverse(word){
  const wordArray=word.split("");
   const reversedWordArray =wordArray.reverse();
   const reversedWord=reversedWordArray.join("");
   return reversedWord
}

function isPalindrome(word) {
   // Write your algorithm here
  const myWord=reverse(word);
  //if input is the same as the output
  if(myWord === word ){
    return true;
  }
  else{
    return false;
  }
}
 
 /*
  

    
  */
  
  
    


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mum"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
