const quotes = [
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger"
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller"
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney"
    },
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author: "Usain Bolt"
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr"
    },
    {
        quote: "If you mess up,it's not you parent's fault, so don't whine about you mistakes, learn from them.",
        author: "Bill Gates"
    },
    {
        quote: "Keep true to the dreams of thy youth.",
        author: "Friedrich von Schiller"
    },
    {
        quote: "What we dwell on is who we become.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "James M. Barrie"
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

function showQuotes() {

    const random = Math.floor(Math.random() * quotes.length);
    const todaysQuote = quotes[random];
    
    quote.innerHTML = todaysQuote.quote;
    author.innerHTML = `- ${todaysQuote.author}`;
}

showQuotes();