class ImageLoader {
  static load(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => {
        resolve(img);
      });
      img.addEventListener('error', (ev) => {
        reject(ev.error);
      });
      img.src = src;
    });
  }
}

export default ImageLoader;