import GameStatus from "../../../../status";
import { speedSetting } from "../../../../setting";

const KickLeftWall = () => {
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX /GameStatus.block.size + 1] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] === null) {
                        GameStatus.field.flags.twoBlocks = true;
                        return true;
                    } else if(GameStatus.block.positionX / GameStatus.block.size - 2 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX /GameStatus.block.size + 1] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    return null;
                case 2:
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX /GameStatus.block.size + 1] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 3:
                    return null;
            }
            break;
        case "t":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("kickwall t 0");
                    return null;
                case 1:
                    console.log("kickwall t 1");
                    break;
                case 2:
                    console.log("kickwall t 2");
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] === null) { //left side
                        return true;
                    } else {
                        return null;
                    }
                case 3:
                    console.log("kickwall t 3");
                    return null;
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    console.log("kickwall s 2");
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 3:
                    break;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    break;
                case 2:
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 3:
                    break;
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("kickwall j 0");
                    break;
                case 1:
                    console.log("kickwall j 1");
                    break;
                case 2:
                    console.log("kickwall j 2");
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                    break;
                case 3:
                    console.log("kickwall j 3");
                    break;
            }
            break;
        case "l":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("kickwall l 0");
                    break;
                case 1:
                    console.log("kickwall l 1");
                    break;
                case 2:
                    console.log("kickwall l 2");
                    if(GameStatus.block.positionX / GameStatus.block.size - 1 < 0 && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                    break;
                case 3:
                    console.log("kickwall l 3");
                    break;
            }
            break;
    }
}

export default KickLeftWall;