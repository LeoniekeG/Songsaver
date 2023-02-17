import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TrainingOverview from './Components/TrainingOverview';

function App() {

  return (
    <div className="App">
      <Header />
      <TrainingOverview />
      <Footer />
    </div>
  );
}

export default App;
