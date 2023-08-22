let generateBtn = document.getElementById("gen-1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4")
var lengthValue = document.getElementById("length-value")
let alphabetNumbersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"];



function generatePassword() {
    var password = "";

    for (let i = 0; i <= 10; i++) {
        var randomPassword = Math.floor(Math.random() * alphabetNumbersArray.length);
        password += alphabetNumbersArray[randomPassword];
    }
    
    return password;
}


   

generateBtn.addEventListener("click", function() {
    var passwordElements = document.getElementsByClassName("btn");
    
    for (var i = 0; i < passwordElements.length; i++) {
        var password = generatePassword();
        passwordElements[i].textContent = password;
    }
});







// generateBtn.addEventListener("click", function(){
//     for( i = 0; i < alphabetNumbersArray; i++){
      
//         let randomPass = Math.floor(Math.random() * alphabetNumbersArray )
//         btn1.textContent += alphabetNumbersArray[randomPass]
    
      
// }
    
    
// })

