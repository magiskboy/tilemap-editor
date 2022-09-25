import { ImageLoader } from "core/Loader";
import { Size, Vec2 } from "./common.interface";

class Graphic {
  private context: CanvasRenderingContext2D;
  private size: Size;

  constructor(canvasElement: HTMLCanvasElement) {
    this.context = canvasElement.getContext("2d")!;
    this.size = { width: canvasElement.width, height: canvasElement.height };
  }

  public async drawImage(
    src: HTMLImageElement | string,
    dx = 0,
    dy = 0
  ): Promise<HTMLImageElement> {
    let image: HTMLImageElement;
    if (typeof src === "string") {
      image = await ImageLoader.load(src);
    } else {
      image = src;
    }

    // this.context.drawImage(image, dx, dy);
    return image;
  }

  public drawGrid(from: Vec2, to: Vec2, size: Vec2, opt?: Option): void {
    const nx = Math.ceil((to.x - from.x) / size.x);
    const ny = Math.ceil((to.y - from.y) / size.y);

    // draw x-axis
    for (let i = 0; i < nx + 1; ++i) {
      this.drawLine(
        { x: from.x + i * size.x, y: from.y },
        { x: from.x + i * size.x, y: to.y },
        opt
      );
    }

    // draw y-axis
    for (let i = 0; i < ny + 1; ++i) {
      this.drawLine(
        { x: from.x, y: from.y + i * size.y },
        { x: to.x, y: from.y + i * size.y },
        opt
      );
    }
  }

  public drawLine(from: Vec2, to: Vec2, opt?: Option): void {
    this.context.beginPath();
    this.context.moveTo(from.x, from.y);
    this.context.lineTo(to.x, to.y);
    if (opt?.color) {
      this.context.strokeStyle = opt.color;
    }
    if (opt?.width) {
      this.context.lineWidth = opt.width;
    }
    this.context.stroke();
  }

  public clear(x?: number, y?: number, w?: number, h?: number) {
    x = x || 0;
    y = y || 0;
    w = w || this.size.width;
    h = h || this.size.height;
    this.context.clearRect(x, y, w, h);
  }
}

interface Option {
  color?: string;
  width?: number;
}

export default Graphic;
