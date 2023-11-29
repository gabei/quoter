import { Component } from 'react';
import Display from './Display/Display';
import './App.scss';
import axios from 'axios';

console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      loading: true
    }
  }

  componentDidMount() {
    console.log("Make initial API call here");
  }

  render(){
    return (
      <div className="App">
        <div className = "container">
          <Display></Display>
          <button className="quote-button">Click me</button>
        </div>
      </div>
    );
  }

}

export default App;
