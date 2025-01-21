import './App.css';
import React from 'react';


const Person = {
  name : "Alice" , 
  age : 18 , 
  major : 'CS'
}

class Header extends React.Component{
  render(){
    return(

      <p>This is a header Component</p>
    )
  }

}

class Colour extends React.Component{
  render() {
    return (
      <div>
        <button> just a simple button </button>
      </div>
    )
  }
}

class headerTwo extends React.Component{
  render() {
    const title = "test header";
    const subtitle = "test subheader"
    return (
      <div>
        <header title={title} subtitle={subtitle}></header>
      </div>
    )
  }
}

class Welcome extends React.Component{
  render() {
    return (
      <div>
        <p>Welcome {this.props.name} !</p>
      </div>
    )
  }
}


class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option, index) => (
          <div key={index}>
            {option}
          </div>
        ))}
      </div>
    );
  }
}


class Counter extends React.Component{
    

  increment = () => {
      this.setState({count: this.state.count +1})
  };

  render(){
      return(
          <div>
              <button onClick={this.increment}>increment</button>
              <p>{this.state.count}</p>
          </div>
      )
  }
}


function App() {


  return (
    <div className="App">
      <Header/>
      <Colour/>
      <headerTwo/>
      <p>hello mfs !</p>
      <Welcome name={Person.name}/>
      <Option/>
    </div>
  );
}



export default App;


