import { WaterTexture } from './WaterTexture';
class App {
  constructor() {
    this.waterTexture = new WaterTexture({ debug:true });
    this.tick = this.tick.bind(this);
    this.init();
  }
  init() {
    window.addEvenListener('mousemove', this.onMouseMove.bind(this));
    this.tick();
  }
  onMouseMove(ev) {
    const point = {
      x: ev.clientX / window.innerWidth,
      y: ev.clientY / window.innerHeight,
    }
    this.waterTexture.addPoint(point);
  }
  thick() {
    this.waterTexture.update();
    requestAnimationFrame(this.tick);
  }
}

const myApp = new App();
