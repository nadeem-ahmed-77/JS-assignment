

var vowels = []
var consonent= []

function getvowels(){
    var getWords = document.getElementById('words').value;

    console.log(getWords)

    var table = false 

    for (var i=0; i<getWords.length; i++ ){
    
    if (getWords[i] === "a" || 
        getWords[i] === "i" || 
        getWords[i] === "o" || 
        getWords[i] === "u" ||
        getWords[i] === "e"){
            
            table = true;
            break;
        }
    }
        if (table){
                vowels.push(getWords)
           
    } else {
            consonent.push(getWords)
           
    }

console.log("vowels array: " + vowels)
console.log("consonent array: " + consonent)
}




// var vowels = []
// var consonent = []

// function getvowels(){
//     var getWords = document.getElementById('words').value;

//     console.log(getWords);

//     var hasVowel = false;
//     for (var i = 0; i < getWords.length; i++) {
//         if (getWords[i] === "a" || 
//             getWords[i] === "i" || 
//             getWords[i] === "o" || 
//             getWords[i] === "u" || 
//             getWords[i] === "e") {
            
//             hasVowel = true;
//             break;
//         }
//     }

//     if (hasVowel) {
//         vowels.push(getWords);
//     } else {
//         consonent.push(getWords);
//     }

//     console.log("Vowels Array: ", vowels);
//     console.log("Consonants Array: ", consonent);
// }
