import { Component } from 'react';
import Display from './Display/Display';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      loading: true
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:2000/quote')
      .then((res) => res.json());

      this.setState({
        quote: response[0].quote
      })
  }

  render(){
    return (
      <div className="App">
        <div className = "container">
          <Display quote={this.state.quote}></Display>
          <button className="quote-button">Click me</button>
        </div>
      </div>
    );
  }

}

export default App;
