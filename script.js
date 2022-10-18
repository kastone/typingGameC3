const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');

let wordQueue;
let highlightPosition;


function startGame(){
    console.log("Game started");

    quoteText = "type me";
    wordQueue = quoteText.split(' ');
    quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');

    highlightPosition = 0;
    quote.childNodes[highlightPosition].className = 'highlight';
}
start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);

function checkInput() {
    console.log("Checking", input.value);
    const currentWord = wordQueue[0];
    const typedValue = input.value.trim();
    
    if(currentWord !== typedValue){
        input.className = currentWord.startsWith(typedValue) ? "" : "error";
        return;
    }
    wordQueue.shift();
    input.value = "";
}