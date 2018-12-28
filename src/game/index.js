import { Scene } from "phaser";
import Background from "./background";
import adventurer from "../assets/adventurer.png";

import layer1 from "../assets/layer1.png";

export class SceneMain extends Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.textures.addBase64("layer1", layer1);

    this.load.spritesheet("adventurer", adventurer, {
      frameWidth: 50,
      frameHeight: 37
    });
  }

  create() {
    const background = new Background({ scene: this });
    background.x = this.game.config.width / 2;

    this.adventurer = this.add.sprite(0, this.game.config.height / 2);
    this.adventurer.setScale(1.5);

    const frames = this.anims.generateFrameNumbers("adventurer");

    this.anims.create({
      key: "walk",
      frames,
      frameRate: 8,
      repeat: -1
    });

    this.adventurer.play("walk");
    this.doWalk();
  }

  doWalk() {
    this.tweens.add({
      targets: this.adventurer,
      duration: 5000,
      x: this.game.config.width - 10,
      onComplete: this.onCompleteHandler,
      onCompleteParams: [this]
    });
  }

  onCompleteHandler(tween, targets, scope) {
    const char = targets[0];
    char.x = 0;
    scope.doWalk();
  }

  update() {}
}

export default SceneMain;
