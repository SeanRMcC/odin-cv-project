import React, {Component} from "react";
import InputArea from "./components/InputArea.js";
import CVDisplay from "./components/CVDisplay.js";

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <>
        <h1>CV Application</h1> 
        <InputArea />
        <CVDisplay />
      </>
    );
  }
}

export default App;
