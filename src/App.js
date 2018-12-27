import React, { Component } from "react";
import "./App.css";

import Phaser from "phaser";
import SceneMain from "./game";

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  parent: "phaser-game-container",
  scene: SceneMain
};

const MAX_WIDTH = 960;

class App extends Component {
  componentDidMount() {
    window.addEventListener("optimizedResize", this.resizeGame);
    const { innerWidth } = window;
    const width = innerWidth > MAX_WIDTH ? MAX_WIDTH : innerWidth;
    const height = (width * 9) / 16;
    this.game = new Phaser.Game({ ...config, width, height });
  }

  resizeGame = () => {
    const { innerWidth } = window;
    const width = innerWidth > MAX_WIDTH ? MAX_WIDTH : innerWidth;
    const height = (width * 9) / 16;
    return this.game.resize(width, height);
  };

  componentWillUnmount() {
    window.removeEventListener("optimizedResize", this.resizeGame);
  }

  render() {
    return (
      <div className="App">
        <h1>Phaser Game with CRA</h1>
        <div id="phaser-game-container" />
        <p>Boilerplate to combine both technologies.</p>
      </div>
    );
  }
}

export default App;
