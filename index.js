function reverse(word){
  const wordArray=word.split("");
   const reversedWordArray =wordArray.reverse();
   const reversedWord=reversedWordArray.join("");
   return reversedWord
}

function isPalindrome(word) {
  const myWord=reverse(word);
  //if input is the same as the output
  if(word === myWord ){
    return true;
  }
  else{
    return false;
  }
}
  // Write your algorithm here
 /* let myPalindrome=""
  let palindrome=myPalindrome.forEach(myPalindrome=> {
    for (const words of myPalindrome){
        let aPalindrome=(words)=>{
           for(let i=0;i<words.length;i++){
            return i
           }
        }
        let thePalindrome=(words)=>{
          for(let i=words.length;i>=0;i--){
            return i
          }
        }
    }

    
  });*/
  
  
    


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
