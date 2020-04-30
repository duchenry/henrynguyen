import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import PropTypes from "prop-types";
import Conditional from "./Conditional";
{
  /*Hello World*/
}

//Conditional Rendering Example 1 when collecting data
/*class File extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: true,
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        status: false,
      })
    }, 2000)
  }
  render(){
    return(
      <div>
        {this.state.status ? <h1>Loading...</h1> : <h1>It is loaded</h1>}
      </div>
    )
  }
}
//Conditional Rendering Example 2 with array
*/
/*class File1 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      component: ["pho", "chao", "Bun"]
    }
  }
  render(){
    return (
      <div>
        {this.state.component.length > 0 ? (
          <h1>Hom nay co {this.state.component.length} mon</h1>
        ) : null}
      </div>
    );
  }
}*/
class File2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevStatus) => {
      return {
        status: !prevStatus.status,
      };
    });
  }
  render() {
    let buttonText = this.state.status ? "LOG IN" : "LOG OUT";
    let text = this.state.status ? "LOGGED OUT" : "LOGGED IN";
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1 className="text">{text}</h1>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>

        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>

        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>

        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        <p>This is a complement i can give you</p>
        
      </div>
    );
  }
}
ReactDOM.render(<File2 />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
