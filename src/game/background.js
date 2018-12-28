import { GameObjects } from "phaser";

export class Background extends GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.back = this.scene.add.image(0, 0, "layer1");
    this.add(this.back);
    this.scene.add.existing(this);
    this.setSize(this.scene.game.config.width, this.scene.game.config.height);
  }
}

export default Background;
