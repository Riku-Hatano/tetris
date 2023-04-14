import { speedSetting, fieldSetting, blockSetting } from "../setting";
import GameStatus from "../status";
import { canvas } from "../Main";
import GetToBottom from "./GetToBottom";
import Game from "../../pages/game";

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
            if((GameStatus.block.positionY + speedSetting.testSpeed) - (GameStatus.field.calcPiles()[GameStatus.block.positionX / GameStatus.block.size]) <= fieldSetting.height - blockSetting.size * 2) { //checkout if current block is getting to bottom of field.
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY += speedSetting.testSpeed;
            } else {
                // console.log((GameStatus.field.calcPiles()[GameStatus.block.positionX / GameStatus.block.size]));
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY += speedSetting.testSpeed;
                canvas.fillRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
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
    canvas.fillRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
}

export default KeyHandler;