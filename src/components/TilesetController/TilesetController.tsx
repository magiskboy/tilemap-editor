import type React from "react";
import Selection from "components/Selection";
import Button from "components/Button";
import Tileset from "components/Tileset";
import { Tileset as ITileset } from "core/Tileset/interfaces";

function TilesetController(
  props: Props & React.HTMLAttributes<HTMLDivElement>
) {
  const { tilesets, selectedTileset, onChange, ...rest } = props;
  return (
    <div {...rest}>
      <div style={{ display: "flex" }}>
        <Selection<ITileset & { key: string }>
          options={tilesets.map((tileset, index) => ({
            label: tileset.name,
            key: index.toString(),
            ...tileset,
          }))}
          onChange={onChange}
        />
        <Button style={{ marginLeft: "4px" }}>Add</Button>
      </div>
      {selectedTileset && <Tileset tileset={selectedTileset} />}
    </div>
  );
}

interface Props {
  tilesets: ITileset[];
  selectedTileset?: ITileset;
  onChange?: (selected: ITileset) => void;
}

export default TilesetController;
