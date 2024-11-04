var vowels = []
var consonant = []

function getvowels(){
    var getWords = document.getElementById('words').value;

    var table = false;

    for (var i = 0; i < getWords.length; i++) {
        if (getWords[i] === "a" || 
            getWords[i] === "i" || 
            getWords[i] === "o" || 
            getWords[i] === "u" || 
            getWords[i] === "e") {
            
            table = true;
            break;
        }
    }

    if (table) {
        vowels.push(getWords);
    } else {
        consonant.push(getWords);
    }

    // Display the results in the divs
    document.getElementById('vowelWords').innerHTML = `<strong>Vowel Words:</strong> ${vowels.join(", ")}`;
    document.getElementById('consonantWords').innerHTML = `<strong>Consonant Words:</strong> ${consonant.join(", ")}`;
}
