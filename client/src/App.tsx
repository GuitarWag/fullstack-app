import React from 'react';
import './App.css';

import sum from '@libs/sum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Em Construção {sum(1, 3)}</p>
      </header>
    </div>
  );
}

export default App;
