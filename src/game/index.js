import { Scene } from "phaser";
import adventurer from "../assets/adventurer.png";

export class SceneMain extends Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.spritesheet("adventurer", adventurer, {
      frameWidth: 50,
      frameHeight: 37
    });
  }

  create() {
    this.adventurer = this.add.sprite(
      this.game.config.width / 2,
      this.game.config.height / 2
    );
    this.adventurer.setScale(1.5);

    const frames = this.anims.generateFrameNumbers("adventurer");

    this.anims.create({
      key: "walk",
      frames,
      frameRate: 8,
      repeat: -1
    });

    this.adventurer.play("walk");
  }

  update() {}
}

export default SceneMain;
