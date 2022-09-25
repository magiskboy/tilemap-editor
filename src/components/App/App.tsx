import styles from "./App.module.scss";
import Text from "components/Text";
import TilesetController from "components/TilesetController";
import { Tileset } from "core/Tileset/interfaces";
import { useState } from "react";

const fakeTilesets: Tileset[] = [
  {
    name: "Ground",
    src: "https://img.itch.zone/aW1nLzU4ODcyNTMucG5n/315x250%23c/KvD%2BBS.png",
    tileSize: { x: 32, y: 32 },
  },
  {
    name: "Object",
    src: "https://opengameart.org/sites/default/files/PathAndObjects.png",
    tileSize: { x: 32, y: 32 },
  },
];

function App() {
  const [selectedTileset, setSelectedTileset] = useState<Tileset>(
    fakeTilesets[0]
  );
  const [tilesets, setTilesets] = useState<Tileset[]>(fakeTilesets);

  return (
    <div className={styles.root}>
      <div id="nav" className={styles.nav}>
        <Text size={22}>Tilemap Editor</Text>
      </div>
      <div className={styles.main}>
        <div id="draw" className={styles.draw}>
          Draw
        </div>
        <div id="control" className={styles.control}>
          <TilesetController
            id="tileset"
            className={`p-4 ${styles.tileset}`}
            tilesets={tilesets}
            onChange={(selected) => setSelectedTileset(selected as Tileset)}
            selectedTileset={selectedTileset}
          />
          <div id="layer" className={`p-4 ${styles.layer}`}>
            Layer
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
