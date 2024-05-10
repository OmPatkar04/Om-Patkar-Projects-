const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote
function newQuote(){
    loading();
    // Pick a random quote from apiQuotes array.
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length+1)];
    // Check if Author field is blank and replace it with Unknown
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 30){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }


    quoteText.textContent = quote.text;
    complete();
    console.log(quote);
}

// Get Quotes From API
async function getQuotes(){
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();

        // console.log(apiQuotes);
        // console.log(apiQuotes[12]);
        newQuote();
    }catch(error){
        //Catch Error Here
        // alert(error);
    }
}

console.log(newQuote[1])
//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}


// Whatsapp Quote
// function whatsappQuote(){
//     const whatsappUrl = `whatsapp://send?text=${quoteText.textContent} - ${authorText.textContent}`;
//     window.open(whatsappUrl,'_blank');  
// }

//Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);





//On Load
getQuotes();



console.log(apiQuotes);