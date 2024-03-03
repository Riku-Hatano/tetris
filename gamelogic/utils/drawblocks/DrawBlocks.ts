import GameStatus from "../../status";
import { Setting } from "../../setting";
import OneBlock from "./OneBlock";

//This function defines which part should be drawn depending on array of field(GameStatus.field.field).　//GameStatus.field.fieldに応じてどこにブロックを描画するかを決める関数です。

const DrawBlocks = () => {
  const field = GameStatus.field.field;
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] !== null) {
        OneBlock(
          j * Setting.block.size,
          i * Setting.block.size,
          Setting.block.size,
          Setting.block.size,
          GameStatus.field.field[i][j].color,
        );
      }
    }
  }
};

export default DrawBlocks;
