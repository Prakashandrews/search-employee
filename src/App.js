import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sample/>
      </header>
    </div>
  );
}

export default App;
