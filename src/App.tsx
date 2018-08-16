import * as React from "react";
import styled from "styled-components";
import "./App.css";
import Container from "./containers/sampleContainer";
import { COLORS, FONT } from "./css";
class App extends React.Component {
  public render() {
    const Hoge = styled.button`
      font-size: ${FONT.SIZE.LARGE};
      width: ${100 + 100}px;
      height: 200px;
    `;
    const DivElement = styled.div`
      background-color: ${COLORS.main};
    `;
    // tslint:disable-next-line:no-console
    console.log(Hoge);
    return (
      <div className="App">
        <h1> reduxのサンプルらしい </h1>
        <Container />
        <DivElement>
          <Hoge>aaaaaaaa</Hoge>
        </DivElement>
      </div>
    );
  }
}

export default App;
