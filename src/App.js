import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class App extends Component {


  render() {

    return (
      <div className="App">
        <div className="logo" > <img src="favicon.png" alt="logo" /> Slanted news explorer <br/> TV News Archive closed captions </div>
        <div className="block" >
           {Object.keys(this.props).map( (key, index) => 
            <ul className="text-green" key={index} hidden= {this.props[key].color !== 'green'  } > 
              {this.props[key].text} 
              <div className="url"> <a href= {this.props[key].url}> {this.props[key].url}  </a> </div> 
            </ul> 
            )}
        </div>        
        <div className="block">
           {Object.keys(this.props).map((key, index) => 
            <ul className="text-yellow" key={index} hidden= {this.props[key].color !== 'yellow'  } > 
              {this.props[key].text} 
              <div className="url"> <a href= {this.props[key].url}> {this.props[key].url}  </a> </div> 
            </ul> 
            )}
        </div>       
        <div className="block">
           {Object.keys(this.props).map((key, index) => 
            <ul className="text-red" key={index} hidden= {this.props[key].color !== 'red' } > 
              {this.props[key].text} 
              <div className="url"> <a href= {this.props[key].url}> {this.props[key].url}  </a> </div> 
            </ul> 
            )}
        </div> 
        <div className="footer" > MIT Media Lab - Viral Communications </div>
      </div>
    );
  }
}

export default App;
