import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Tileset.module.scss";
import { Tileset as ITileset } from "core/Tileset/interfaces";
import Graphic from "core/Graphic";

function Tileset(props: Props) {
  const { tileset } = props;
  const [scrollable, setScrollable] = useState(false);
  const [graphic, setGraphic] = useState<Graphic>();
  const el = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (el.current) {
      setGraphic(new Graphic(el.current));
    }
  }, []);

  useEffect(() => {
    if (!graphic) return;

    // clear screen
    graphic.clear();

    // draw image of tileset
    graphic.drawImage(tileset.src).then((image) => {
      if (el.current) {
        setScrollable(
          image.width > el.current.clientWidth ||
            image.height > el.current.clientHeight
        );
      }

      // draw grid
      graphic.drawGrid(
        { x: 0, y: 0 },
        { x: image.width, y: image.height },
        tileset.tileSize,
        { color: "white", width: 0.5 }
      );
    });
  }, [tileset.src, graphic, tileset.tileSize]);

  return (
    <div
      className={classNames({
        [styles.scrollable]: scrollable,
      })}
    >
      <canvas
        ref={el}
        width={500}
        height={500}
        className={styles.root}
      ></canvas>
    </div>
  );
}

interface Props {
  tileset: ITileset;
}

export default Tileset;
