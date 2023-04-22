import GameStatus from "../status";
import { canvas } from "../Main";
import DrawBlocks from "./DrawBlocks";
import Rotate from "./rotate/Rotate";
import Move from "./move/Move";

const KeyHandler = (e: any) => {
    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous block
    switch(e.key) {
        case "ArrowRight":
            Move("right");
            break;
        case "ArrowLeft":
            Move("left");
            break;
        case "ArrowDown":
            Move("down");
            break;
        case "ArrowUp":
            Rotate();
            break;
        default:
            console.log(e.key);
            break;
    }
    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; //renew the current block. 
    canvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
    DrawBlocks(); //draw all of tetrimino exept for current one
}

export default KeyHandler;