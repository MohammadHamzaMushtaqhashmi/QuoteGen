import React from 'react';
import QuoteBox from './QuoteBox';

const App = () => {
  return (
    <div className="App">
      <QuoteBox />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', color:'white' }}>
        by HaMza
      </div>
    </div>
  );
};

export default App;
