import { Scene } from "phaser";

export class SceneMain extends Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {}
  create() {
    console.log("Ready!");
  }
  update() {}
}

export default SceneMain;
