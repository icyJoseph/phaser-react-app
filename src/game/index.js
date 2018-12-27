import { Scene } from "phaser";
import logo from "../logo.svg";

export class SceneMain extends Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.image("logo", logo);
  }
  create() {
    this.logo = this.add.image(
      this.game.config.width / 2,
      this.game.config.height / 2,
      "logo"
    );
    this.logo.setOrigin(0.5, 0.5);
    this.logo.alpha = 0.5;
    console.log("Ready!");
  }
  update() {}
}

export default SceneMain;
