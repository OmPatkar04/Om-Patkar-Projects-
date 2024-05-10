const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
const response = await fetch(apiUrl);
apiQuotes = await response.json();
newQuote();

console.log(apiQuotes[1]);
