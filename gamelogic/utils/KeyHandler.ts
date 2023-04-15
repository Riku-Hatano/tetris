import { speedSetting, fieldSetting, blockSetting } from "../setting";
import GameStatus from "../status";
import { canvas } from "../Main";
import GetToBottom from "./GetToBottom";
import CalcPiles from "./gettobottom/CalcPiles";
import DrawBlocks from "./DrawBlocks";

const KeyHandler = (e: any) => {
    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous block
    switch(e.key) {
        case "ArrowRight":
            if(GameStatus.block.positionX + speedSetting.testSpeed <= fieldSetting.width - blockSetting.size) {
                // canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionX += speedSetting.testSpeed;
            } else {
                GameStatus.block.positionX = GameStatus.field.width - GameStatus.block.size;
            }
            break;
        case "ArrowLeft":
            if(GameStatus.block.positionX - speedSetting.testSpeed >= 0) {
                // canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionX -= speedSetting.testSpeed;
            } else {
                GameStatus.block.positionX = 0;
            }
            break;
        case "ArrowDown":
            if((GameStatus.block.positionY + speedSetting.testSpeed) + (CalcPiles()[GameStatus.block.positionX / GameStatus.block.size] * GameStatus.block.size) <= fieldSetting.height - blockSetting.size * 2) { //checkout if current block is getting to bottom of field.
                // canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY += speedSetting.testSpeed;
                GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
            } else {
                GameStatus.block.positionY += speedSetting.testSpeed;
                GetToBottom();
            }
            break;
        case "ArrowUp":
            if(GameStatus.block.positionY - speedSetting.testSpeed >= 0) {
                // canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY -= speedSetting.testSpeed;
            } else {
                GameStatus.block.positionY = 0;
            }
            break;
        default:
            console.log(e.key);
            break;
    }
    canvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
    DrawBlocks(); //draw all of tetrimino exept for current one
}

export default KeyHandler;