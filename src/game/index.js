import { Scene } from "phaser";
import adventurer from "../assets/adventurer.png";
import ground from "../assets/ground.png";

export class SceneMain extends Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.spritesheet("adventurer", adventurer, {
      frameWidth: 50,
      frameHeight: 37
    });
    this.textures.addBase64("ground", ground);
  }

  create() {
    this.adventurer = this.physics.add.sprite(
      this.game.config.width / 2,
      this.game.config.height / 2,
      "adventurer"
    );
    this.adventurer.setScale(1.5);
    this.adventurer.setGravity(0, 200);
    this.adventurer.setBounce(0, 0.5);

    this.ground = this.physics.add.sprite(
      this.game.config.width / 2,
      this.game.config.height,
      "ground"
    );
    this.ground.setImmovable();
    this.physics.add.collider(this.adventurer, this.ground);
    this.input.on("pointerdown", this.moveAdventurer, this);

    const frames = this.anims.generateFrameNumbers("adventurer");

    this.anims.create({
      key: "walk",
      frames,
      frameRate: 8,
      repeat: -1
    });

    this.adventurer.play("walk");
  }

  moveAdventurer() {
    this.adventurer.setVelocity(0, -100);
  }

  update() {}
}

export default SceneMain;
