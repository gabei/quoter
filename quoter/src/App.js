import { Component }, React from 'react';
import Display from './Display/Display';
import './App.css';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      quote: '',
      loading: true
    }
  }

  
  render(){
    return (
      <div className="App">
        <Display></Display>
      </div>
    );
  }
}

export default App;
