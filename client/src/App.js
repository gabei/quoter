import { Component } from 'react';
import Display from './Display/Display';
import './App.scss';
import timeoutAfter from './Error/timeout';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
      loading: true,
      background: 'red',
      error: false,
      errorMessage: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.generateBGcolor = this.generateBGcolor.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  async makeAPIcall(){
    this.setState({ loading: true });

    const response = await fetch('https://quoter-api-ytj3.onrender.com/quote')
    .then((res) => res.json());

    this.setState({
      quote: response[0].quote,
      author: response[0].author,
      loading: false,
    });

    return response;
  }

  async componentDidMount() {
    try 
      {
        await Promise.race([this.makeAPIcall(), timeoutAfter()]);
      }
    catch(error)
      {
        this.handleError(error);
      }
  }

  async handleClick(){
    this.setState({ background: this.generateBGcolor( )})
    this.makeAPIcall();
  }

  handleError(error){
    this.setState({
      loading: false,
      error: true, 
      errorMessage: error
    });
  }

  generateBGcolor() {
    let colors = ['red', 'blue', 'green', 'purple', 'yellow'];
    let backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    return backgroundColor;
  }

  render(){
    let view;

    if(this.state.loading){
      view = 
      <div className="loader"></div>
    } 
    else if(this.state.error){
      view = 
      <p>{`${this.state.errorMessage}`}</p>;
    }
    else {
      view = 
      <div>
          <Display
            quote={ this.state.quote } 
            author={ this.state.author }></Display>
          <button 
            className="quote-button"
            onClick={ this.handleClick }>Get a new quote</button>
      </div>
    }
      
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
