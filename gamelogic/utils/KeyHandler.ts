import { speedSetting, fieldSetting, blockSetting } from "../setting";
import GameStatus from "../status";
import { canvas } from "../Main";
import GetToBottom from "./GetToBottom";
import CalcPiles from "./gettobottom/CalcPiles";
import OneBlock from "./OneBlock";
import DrawBlocks from "./DrawBlocks";

const KeyHandler = (e: any) => {
    switch(e.key) {
        case "ArrowRight":
            if(GameStatus.block.positionX + speedSetting.testSpeed <= fieldSetting.width - blockSetting.size) {
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionX += speedSetting.testSpeed;
            } else {
                GameStatus.block.positionX = GameStatus.field.width - GameStatus.block.size;
            }
            break;
        case "ArrowLeft":
            if(GameStatus.block.positionX - speedSetting.testSpeed >= 0) {
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionX -= speedSetting.testSpeed;
            } else {
                GameStatus.block.positionX = 0;
            }
            break;
        case "ArrowDown":
            if((GameStatus.block.positionY + speedSetting.testSpeed) + (CalcPiles()[GameStatus.block.positionX / GameStatus.block.size] * GameStatus.block.size) <= fieldSetting.height - blockSetting.size * 2) { //checkout if current block is getting to bottom of field.
                // canvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY += speedSetting.testSpeed;
            } else {
                // canvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
                // canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY += speedSetting.testSpeed;
                // canvas.fillRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GetToBottom();
            }
            break;
        case "ArrowUp":
            if(GameStatus.block.positionY - speedSetting.testSpeed >= 0) {
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY -= speedSetting.testSpeed;
            } else {
                GameStatus.block.positionY = 0;
            }
            break;
        default:
            console.log("other key");
            break;
    }
    // canvas.fillRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
    canvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
    OneBlock(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
    DrawBlocks();
}

export default KeyHandler;