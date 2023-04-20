import { speedSetting, fieldSetting, blockSetting } from "../setting";
import GameStatus from "../status";
import { canvas } from "../Main";
import GetToBottom from "./GetToBottom";
import CalcPiles from "./gettobottom/CalcPiles";
import DrawBlocks from "./DrawBlocks";
import Rotate from "./Rotate";
import Move from "./Move";

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
            // if((GameStatus.block.positionY + speedSetting.testSpeed) + (CalcPiles()[GameStatus.block.positionX / GameStatus.block.size] * GameStatus.block.size) <= fieldSetting.height - blockSetting.size * 2) { //checkout if current block is getting to bottom of field.
            //     GameStatus.block.positionY += speedSetting.testSpeed;
                Move("down");
            // } else {
            //     GameStatus.block.positionY += speedSetting.testSpeed;
            //     Move("down");
            //     GetToBottom();
            // }
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