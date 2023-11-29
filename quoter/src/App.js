import { Component } from 'react';
import Display from './Display/Display';
import './App.scss';


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
    console.log('fetch data here');
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
