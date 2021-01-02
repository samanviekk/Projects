const quotes = [
  {
    name: "-Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
  },
  {
    name: "-James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
  },
  {
    name: "-Walt Disney",
    quote: "The way to get started is to quit talking and begin doing."
  },
  {
    name: "-Benjamin Franklin",
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn."
  },
  {
    name: "-Ralph Waldo Emerson",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail."
  }
];

const quoteBtn = document.querySelector("#quote-btn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quote-author");

quoteBtn.addEventListener("click", getQuote);

function getQuote() {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  quoteAuthor.innerHTML = quotes[random].name;
}
