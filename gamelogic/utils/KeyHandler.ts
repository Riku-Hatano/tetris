import { speedSetting, fieldSetting, blockSetting } from "../setting";
import GameStatus from "../status";
import { canvas } from "../Main";
import CreateRect from "./CreateRect";
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
            if(GameStatus.block.positionY + speedSetting.testSpeed <= fieldSetting.height - blockSetting.size * 2) {
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY += speedSetting.testSpeed;
            } else {
                canvas.clearRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                GameStatus.block.positionY += speedSetting.testSpeed;
                canvas.fillRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
                CreateRect();
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