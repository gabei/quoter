import { Component } from 'react';
import Display from './Display/Display';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
      loading: true
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:2000/quote')
      .then((res) => res.json());

      this.setState({
        quote: response[0].quote,
        author: response[0].author,
        loading: false
      })
  }

  render(){
    return (
      <div className="App">
        <div className = "container">
          <Display 
            quote = { this.state.quote } 
            author = { this.state.author }>
          </Display>
          <button className="quote-button">Click me</button>
        </div>
      </div>
    );
  }

}

export default App;
