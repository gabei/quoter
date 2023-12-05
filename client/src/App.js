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

    this.handleClick = this.handleClick.bind(this);
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
      loading: false
    });
  }

  render(){
    let view = 
      this.state.loading ? 
      <div className = "container">
        <div className="loader"></div>
      </div>
        
      : (
        <div className = "container">
          <Display
            quote={ this.state.quote } 
            author={ this.state.author }></Display>
          <button className="quote-button"
            onClick={ this.handleClick }
            className="quote-button">Get a new quote</button>
        </div>
      )

    return (
      <div className="App">
        {view}
      </div>
    );
  }
}

export default App;
