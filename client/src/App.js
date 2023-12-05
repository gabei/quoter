import { Component } from 'react';
import Display from './Display/Display';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
      loading: true,
      background: 'red'
    }

    this.handleClick = this.handleClick.bind(this);
    this.generateBGcolor = this.generateBGcolor.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:2000/quote')
    .then((res) => res.json());

    this.setState({
      quote: response[0].quote,
      author: response[0].author,
      loading: false
    });
  }

  async handleClick(){
    this.setState({ loading: true });

    const response = await fetch('http://localhost:2000/quote')
    .then((res) => res.json());

    this.setState({
      quote: response[0].quote,
      author: response[0].author,
      loading: false,
      background: this.generateBGcolor()
    });
  }

  generateBGcolor() {
    let colors = ['red', 'blue', 'green', 'purple', 'yellow'];
    let backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    return backgroundColor;
  }

  render(){

    let view =
    
      this.state.loading ? 
        <div className="loader"></div>
      : 
        <div>
          <Display
            quote={ this.state.quote } 
            author={ this.state.author }></Display>
          <button 
            className="quote-button"
            onClick={ this.handleClick }>Get a new quote</button>
        </div>
      
    return (
      <div className="App">
        <div className={`container ${this.state.background}`}>
          {view}
        </div>
      </div>
    );
  }
}

export default App;
