import GameStatus from "../status";
import OneBlock from "./OneBlock";

const DrawBlocks = () => {
    const field = GameStatus.field.field;
    for(let i = 0 ; i < field.length ; i++) {
        for(let j = 0 ; j < field[i].length ; j++) {
            if(field[i][j] !== null) {
                OneBlock(j * GameStatus.block.size, i * GameStatus.block.size, GameStatus.block.size, GameStatus.block.size,
                    GameStatus.field.field[i][j].color);
            }
        }
    }
}

export default DrawBlocks;