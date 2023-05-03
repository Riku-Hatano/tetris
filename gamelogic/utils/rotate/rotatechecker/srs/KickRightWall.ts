import GameStatus from "../../../../status";
import { speedSetting } from "../../../../setting";

const KickRightWall = () => {
    const wall = 10;
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(GameStatus.block.positionX / GameStatus.block.size + 1 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.positionY - 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    return null;
                case 2:
                    if(GameStatus.block.positionX / GameStatus.block.size + 1 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.positionY - 2] === null) {
                        GameStatus.field.flags.twoBlocks = true;
                        return true;
                    } else if(GameStatus.block.positionX / GameStatus.block.size + 2 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.positionY - 2] === null) {
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
                    if(GameStatus.block.positionX / GameStatus.block.size + 1 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    return null;
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(GameStatus.block.positionX / GameStatus.block.size + 1 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    return null;
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(GameStatus.block.positionX / GameStatus.block.size + 1 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    return null;
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(GameStatus.block.positionX / GameStatus.block.size + 1 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] === null && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    return null;
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
        case "l":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(GameStatus.block.positionX / GameStatus.block.size + 1 >= wall && GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] === null) {
                        return true;
                    } else {
                        return null;
                    }
                case 1:
                    return null;
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
    }
}

export default KickRightWall;