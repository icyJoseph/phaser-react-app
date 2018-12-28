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

    this.anims.create({
      key: "walk",
      frames: [
        { key: "adventurer", frame: 0 },
        { key: "adventurer", frame: 1 },
        { key: "adventurer", frame: 2 },
        { key: "adventurer", frame: 3 },
        { key: "adventurer", frame: 4 }
      ],
      frameRate: 8,
      repeat: -1
    });
    console.log(this);
    console.log("Ready!");
    this.adventurer.play("walk");
  }
  update() {}
}

export default SceneMain;
