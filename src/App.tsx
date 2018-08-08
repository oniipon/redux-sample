import * as React from "react";
import "./App.css";
import Container from "./containers/sampleContainer";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <h1> reduxのサンプルらしい </h1>
        <Container />
      </div>
    );
  }
}

export default App;
