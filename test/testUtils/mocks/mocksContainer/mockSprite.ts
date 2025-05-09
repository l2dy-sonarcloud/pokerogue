import Phaser from "phaser";
import type { MockGameObject } from "../mockGameObject";
import Sprite = Phaser.GameObjects.Sprite;
import Frame = Phaser.Textures.Frame;

export default class MockSprite implements MockGameObject {
  private phaserSprite;
  public pipelineData;
  public texture;
  public key;
  public frame;
  public textureManager;
  public scene;
  public anims;
  public list: MockGameObject[] = [];
  public name: string;
  constructor(textureManager, x, y, texture) {
    this.textureManager = textureManager;
    this.scene = textureManager.scene;
    // @ts-ignore
    Phaser.GameObjects.Sprite.prototype.setInteractive = this.setInteractive;
    // @ts-ignore
    Phaser.GameObjects.Sprite.prototype.setTexture = this.setTexture;
    Phaser.GameObjects.Sprite.prototype.setSizeToFrame = this.setSizeToFrame;
    Phaser.GameObjects.Sprite.prototype.setFrame = this.setFrame;
    // Phaser.GameObjects.Sprite.prototype.disable = this.disable;

    // Phaser.GameObjects.Sprite.prototype.texture = { frameTotal: 1, get: () => null };
    this.phaserSprite = new Phaser.GameObjects.Sprite(textureManager.scene, x, y, texture);
    this.pipelineData = {};
    this.texture = {
      key: texture || "",
    };
    this.anims = {
      pause: () => null,
      stop: () => null,
    };
  }

  setTexture(_key: string, _frame?: string | number) {
    return this;
  }

  setSizeToFrame(_frame?: boolean | Frame): Sprite {
    return {} as Sprite;
  }

  setPipeline(obj) {
    // Sets the pipeline of this Game Object.
    return this.phaserSprite.setPipeline(obj);
  }

  off(_event, _callback, _source) {}

  setTintFill(color) {
    // Sets the tint fill color.
    return this.phaserSprite.setTintFill(color);
  }

  setScale(scale) {
    return this.phaserSprite.setScale(scale);
  }

  setOrigin(x, y) {
    return this.phaserSprite.setOrigin(x, y);
  }

  setSize(width, height) {
    // Sets the size of this Game Object.
    return this.phaserSprite.setSize(width, height);
  }

  once(event, callback, source) {
    return this.phaserSprite.once(event, callback, source);
  }

  removeFromDisplayList() {
    // same as remove or destroy
    return this.phaserSprite.removeFromDisplayList();
  }

  addedToScene() {
    // This callback is invoked when this Game Object is added to a Scene.
    return this.phaserSprite.addedToScene();
  }

  setVisible(visible) {
    return this.phaserSprite.setVisible(visible);
  }

  setPosition(x, y) {
    return this.phaserSprite.setPosition(x, y);
  }

  setRotation(radians) {
    return this.phaserSprite.setRotation(radians);
  }

  stop() {
    return this.phaserSprite.stop();
  }

  setInteractive = () => null;

  on(event, callback, source) {
    return this.phaserSprite.on(event, callback, source);
  }

  setAlpha(alpha) {
    return this.phaserSprite.setAlpha(alpha);
  }

  setTint(color) {
    // Sets the tint of this Game Object.
    return this.phaserSprite.setTint(color);
  }

  setFrame(frame, _updateSize?: boolean, _updateOrigin?: boolean) {
    // Sets the frame this Game Object will use to render with.
    this.frame = frame;
    return frame;
  }

  setPositionRelative(source, x, y) {
    /// Sets the position of this Game Object to be a relative position from the source Game Object.
    return this.phaserSprite.setPositionRelative(source, x, y);
  }

  setY(y) {
    return this.phaserSprite.setY(y);
  }

  setCrop(x, y, width, height) {
    // Sets the crop size of this Game Object.
    return this.phaserSprite.setCrop(x, y, width, height);
  }

  clearTint() {
    // Clears any previously set tint.
    return this.phaserSprite.clearTint();
  }

  disableInteractive() {
    // Disables Interactive features of this Game Object.
    return null;
  }

  apply() {
    return this.phaserSprite.apply();
  }

  play() {
    // return this.phaserSprite.play();
    return this;
  }

  setPipelineData(key, value) {
    this.pipelineData[key] = value;
  }

  destroy() {
    return this.phaserSprite.destroy();
  }

  setName(name) {
    return this.phaserSprite.setName(name);
  }

  setAngle(angle) {
    return this.phaserSprite.setAngle(angle);
  }

  setMask() {}

  add(obj) {
    // Adds a child to this Game Object.
    this.list.push(obj);
  }

  removeAll() {
    // Removes all Game Objects from this Container.
    this.list = [];
  }

  addAt(obj, index) {
    // Adds a Game Object to this Container at the given index.
    this.list.splice(index, 0, obj);
  }

  remove(obj) {
    const index = this.list.indexOf(obj);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  getIndex(obj) {
    const index = this.list.indexOf(obj);
    return index || -1;
  }

  getAt(index) {
    return this.list[index];
  }

  getAll() {
    return this.list;
  }
}
