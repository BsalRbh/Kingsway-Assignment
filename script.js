function palindromeChecker() {
    var x = document.getElementById("input1").value;
    // To remove punction and _ but not numbers
    var x1 = x.replace(/[^\w_\s]/g, '').replace(/_/g, '');
// To remove spaces.
    var x2 = x1.replace(/\s+/g, '')
// To convert all the uppercase into lowercase.
    var x3 = x2.toLowerCase()
    // For test purpose
    // console.log(x1)
    // console.log(x2)
    // console.log(x3)
    var reversedx = x3.split("").reverse().join("");/* to reverse the order 
    of the x3(i.e reformated input text)*/

    //    For test purpose
    // console.log(reversedx) 
   
    if (reversedx === x3){
        document.getElementById("answer1").textContent = `${x} is a Palindrome.`;
    }else{
        document.getElementById("answer1").textContent = `${x} is not a Palindrome.`;
    }

}
function fizzBuzz() {
    let a = parseInt(document.getElementById("input2").value)
    if (a % 3 == 0 && a % 5 !== 0) {
        document.getElementById("answer2").textContent = "Fizz"
    } else if (a % 5 == 0 && a % 3 !== 0) {
        document.getElementById("answer2").textContent = "Buzz"
    } else if (a % 5 == 0 && a % 3 == 0) {
        document.getElementById("answer2").textContent = "FizzBuzz"

    } else document.getElementById("answer2").textContent = a
}

function prime()  {
    debugger
    let a = parseInt(document.getElementById("input3").value)
    let b =`${a} is a prime number. `
    if (a === 1) {
        document.getElementById("answer3").textContent = "1 is neither prime nor composite.";
    }
    else if (a < 1) {
        document.getElementById("answer3").textContent= ` ${a} is a composite number.`;
    }
    else {
        for (i = 2; i < a; i++) {
            if (a % i == 0) {
                b = `${a} is a composite number. `;
                // For testing purpose
                // console.log(a,i,a%i) 
                break
                
            }
           
        }
        document.getElementById("answer3").textContent = b;
    }
}


function fibonacci(n) {

    if (n <= 0) {
        return "Try writing Positive Integer ";
    } else if (n == 1)/*1st term */ {
        return [0];
    } else if (n == 2)/*2nd term*/ {
        return [0, 1];
    }
//for remaining term upto nth term
    let fibonacciSequence = [0, 1];/*pre defined 2nd term*/
    for (let i = 2; i < n; i++) {
        let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    return fibonacciSequence;


}

function getFibonacci(){
//  let z = parseInt(document.getElementById("input4").value)
// console.log(z)
    let fibonacciTerms = fibonacci(parseInt(document.getElementById("input4").value));

document.getElementById("answer4").textContent = fibonacciTerms;
}

function anagram(a, b) {
    // To remove non-alphanumeric characters and convert to lowercase
    const a1 = a.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const b1 = b.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // To convert strings to arrays, sort them, and compare
    const a2 = a1.split('').sort().join('');
    const b2 = b1.split('').sort().join('');
  
    if (a2 === b2) {
        return "They are anagrams.";
      } else {
        return "They are not anagrams.";
      }
    }
  
  // For testing purpose
//   const word1 = "listen";
//   const word2 = "silent";
//   console.log(anagram(word1, word2)); //
  
//   const word3 = "hello";
//   const word4 = "world";
//   console.log(anagram(word3, word4))
 function checkAnagram(){
    let c = document.getElementById("input5-1").value
    let d = document.getElementById("input5-2").value
    console.log(c,d)
    document.getElementById("answer5").textContent = anagram(c,d)
 } 
