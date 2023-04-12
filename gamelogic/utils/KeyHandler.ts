import { speedSetting, fieldSetting, blockSetting } from "../setting";
import GameStatus from "../status";
// import { ctx } from "../Main";

const KeyHandler = (e: any) => {
    switch(e.key) {
        case "ArrowRight":
            if(GameStatus.block.positionX + speedSetting.testSpeed <= fieldSetting.width - blockSetting.size) {
                console.log("right");
                GameStatus.block.positionX += speedSetting.testSpeed;
            }
            break;
        case "ArrowLeft":
            if(GameStatus.block.positionX - speedSetting.testSpeed >= 0) {
                GameStatus.block.positionX -= speedSetting.testSpeed;
            }
            break;
        case "ArrowDown":
            if(GameStatus.block.positionY + speedSetting.testSpeed <= fieldSetting.height - blockSetting.size) {
                GameStatus.block.positionY += speedSetting.testSpeed;
            }
            break;
        case "ArrowUp":
            if(GameStatus.block.positionY - speedSetting.testSpeed >= 0) {
                GameStatus.block.positionY -= speedSetting.testSpeed;
            }
            break;
        default:
            console.log("other key");
            break;
    }
    // ctx.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
    // ctx.fillRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
}


// const KeyHandler = (e: any, ctx: any) => {
//     switch(e.key) {
//         case "ArrowRight":
//             if(GameStatus.block.positionX + speedSetting.testSpeed <= fieldSetting.width - blockSetting.size) {
//                 console.log("right");
//                 GameStatus.block.positionX += speedSetting.testSpeed;
//             }
//             break;
//         case "ArrowLeft":
//             if(GameStatus.block.positionX - speedSetting.testSpeed >= 0) {
//                 GameStatus.block.positionX -= speedSetting.testSpeed;
//             }
//             break;
//         case "ArrowDown":
//             if(GameStatus.block.positionY + speedSetting.testSpeed <= fieldSetting.height - blockSetting.size) {
//                 GameStatus.block.positionY += speedSetting.testSpeed;
//             }
//             break;
//         case "ArrowUp":
//             if(GameStatus.block.positionY - speedSetting.testSpeed >= 0) {
//                 GameStatus.block.positionY -= speedSetting.testSpeed;
//             }
//             break;
//         default:
//             console.log("other key");
//             break;
//     }

//     ctx.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
//     ctx.fillRect(GameStatus.block.positionX, GameStatus.block.positionY, GameStatus.block.size, GameStatus.block.size);
// }

export default KeyHandler;