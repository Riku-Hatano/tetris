import GameStatus from "../../status";
import { speedSetting } from "../../setting";


const canMoveRight = (): boolean => {
    const field = GameStatus.field.field;
    const wall = GameStatus.field.field[0].length;
    let x = (GameStatus.block.positionX + speedSetting.testSpeed) / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;

    switch(GameStatus.block.shape) {
        case "i":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(x + 2 <= wall && x + 2 === null) { return true; }
                    break;
                case 1:
                    console.log(field)
                    return false;
                    break;
                case 2:
                    console.log("right i 2");
                    return true;
                    break;
                case 3:
                    console.log("right i 3");
                    return false;
                    break;
            }
            break;
        case "o":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("right o 0");
                    return true;
                    break;
                case 1:
                    console.log("right o 1");
                    return false;
                    break;
                case 2:
                    console.log("right o 2");
                    return true;
                    break;
                case 3:
                    console.log("right o 3");
                    return false;
                    break;
            }
            break;
        case "t":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("right t 0");
                    return true;
                    break;
                case 1:
                    console.log("right t 1");
                    return false;
                    break;
                case 2:
                    console.log("right t 2");
                    return true;
                    break;
                case 3:
                    console.log("right t 3");
                    return false;
                    break;
            }
            break;
        case "s":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("right t 0");
                    return true;
                    break;
                case 1:
                    console.log("right t 1");
                    return false;
                    break;
                case 2:
                    console.log("right t 2");
                    return true;
                    break;
                case 3:
                    console.log("right t 3");
                    return false;
                    break;
            }
            break;
        case "z":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("right z 0");
                    return true;
                    break;
                case 1:
                    console.log("right z 1");
                    return false;
                    break;
                case 2:
                    console.log("right z 2");
                    return true;
                    break;
                case 3:
                    console.log("right z 3");
                    return false;
                    break;
            }
            break;
        case "j":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("right j 0");
                    return true;
                    break;
                case 1:
                    console.log("right j 1");
                    return false;
                    break;
                case 2:
                    console.log("right j 2");
                    return true;
                    break;
                case 3:
                    console.log("right j 3");
                    return false;
                    break;
            }
            break;
        case "l":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("right l 0");
                    return true;
                    break;
                case 1:
                    console.log("right l 1");
                    return false;
                    break;
                case 2:
                    console.log("right l 2");
                    return true;
                    break;
                case 3:
                    console.log("right l 3");
                    return false;
                    break;
            }
            break;   
    }
}

export default canMoveRight;