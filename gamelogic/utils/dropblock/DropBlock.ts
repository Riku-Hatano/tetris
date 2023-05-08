import GameStatus from "../../status";
import DrawBlocks from "../DrawBlocks";
import Move from "../move/Move";
import { canvas } from "../../Main";

let dropBlockInterval: NodeJS.Timer = null;
const DropBlock = () => {
    const drop = () => {
        Move("down");
        GameStatus.field.flags.isPreviousDown = true;
        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block; //renew the current block. 
        canvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
        DrawBlocks();
    }
    if(dropBlockInterval === null) {
        dropBlockInterval = setInterval(drop, 1000);
    }
}

export { dropBlockInterval }
export default DropBlock;