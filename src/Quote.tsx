import { useEffect, useState } from "react";
import './App.css'

interface QuoteInterface {
  id: number;
  quote: string;
  author: string;
}

const Quote = (): JSX.Element => {
  const [quote, setQuote] = useState<QuoteInterface>();

  const getQuote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  };
  useEffect(getQuote, []);

  return (
    <div className="parent-div">
      <div>
        <h1>{quote?.quote}</h1>
      </div>
      <div>
        <h4>-{quote?.author}</h4>
      </div>
      <div>
        <button onClick={getQuote}>Get Quote</button>
      </div>
    </div>
  );
};

export default Quote;
