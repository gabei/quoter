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
      background: 'red',
      error: false,
      errorMessage: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.generateBGcolor = this.generateBGcolor.bind(this);
    this.timeoutAfter = this.timeoutAfter.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  timeoutAfter(seconds){
    return new Promise((_, reject) => {
      setTimeout(()=> {
        reject(new Error('The request could not reach the server. The API server may be down, or your connection may have bee interrupted. Reload the page to try again.'))
      }, seconds);
    });
  }

  handleError(error){
    this.setState({
      loading: false,
      error: true, 
      errorMessage: error
    });
  }

  async makeAPIcall(){
    return await fetch('http://localhost:2000/quote')
    .then((res) => res.json());
  }

  async componentDidMount() {
    try 
      {
      const response = await Promise.race(
        [this.makeAPIcall(), this.timeoutAfter(6000)]
      );

      this.setState({
        quote: response[0].quote,
        author: response[0].author,
        loading: false
      });

    }
    catch(error)
      {
        this.handleError(error);
      }

    //this.makeAPIcall();
  }

  async handleClick(){
    this.setState({ loading: true });

    const response = await this.makeAPIcall();

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
