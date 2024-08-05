import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const apiKey = 'c256ab003e5e586a75121383d47e8831';
  const baseUrl = 'https://favqs.com/api/';
  const fetchQuote = async () => {
    try {
      const response = await fetch(`${baseUrl}quotes/random`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
  
      if (!response.ok) {
        setError('Error fetching quote. Please try again later.');
        return;
      }
  
      const data = await response.json();
      setQuote(data[0]?.q || 'No quote available');
      setAuthor(data[0]?.a || 'Unknown author');
      setError('');
    } catch (error) {
      setError('An error occurred while fetching the quote. Please try again later.');
    }
  };
  

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div id="quote-box" className="text-center">
      {error && <p className="text-danger">{error}</p>}
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <div id='buttons'>
      <button id="new-quote" className="btn btn-primary" onClick={handleNewQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
       // className="btn btn-secondary ml-2"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
         <img src={`${process.env.PUBLIC_URL}/icons8-twitterx-48.png`} alt="Logo" className="tweet" />
      </a>
      </div>
    </div>
  );
};

export default QuoteBox;
