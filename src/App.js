import React from 'react';
import heroes from "./images.json"
import HeroCard from "./HeroCard"


import './App.css';

function App() {
  return (
    <div className="App">
      
        
        {this.state.heroes.map(heroes => (
          <HeroCard
            
            id={heroes.id}
            key={heroes.id}
            
            image={heroes.image}
            
          />
        ))}
      
    </div>
  );
}

export default App;
