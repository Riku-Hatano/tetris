import GameStatus from "../../../../status";
import { speedSetting } from "../../../../setting";

const KickFloor = () => {
    const bottom = GameStatus.field.field.length - (GameStatus.block.initialY / GameStatus.block.size);
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return null;
                case 1:
                    if(GameStatus.block.positionY / GameStatus.block.size + 1 > bottom) {
                        return true;
                    } else {
                        return null;
                    }
                case 2:
                    return null;
                case 3:
                    if(GameStatus.block.positionY / GameStatus.block.size + 1 > bottom) {
                        GameStatus.field.flags.twoBlocks = true;
                        return true;
                    } else if(GameStatus.block.positionY / GameStatus.block.size + 2 > bottom) {
                        return true;
                    } else {
                        return null;
                    }
                    break;
            }
            break;
        case "t":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return null;
                case 1:
                    if(GameStatus.block.positionY / GameStatus.block.size + 1 > bottom) {
                        return true;
                    } else {
                        return null;
                    }
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return null;
                case 1:
                    if(GameStatus.block.positionY / GameStatus.block.size + 1 > bottom) {
                        return true;
                    } else {
                        return null;
                    }
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return null;
                case 1:
                    return null;
                case 2:
                    return null;
                case 3:
                    if(GameStatus.block.positionY / GameStatus.block.size + 1 > bottom) {
                        return true;
                    } else {
                        return null;
                    }
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return null;
                case 1:
                    if(GameStatus.block.positionY / GameStatus.block.size + 1 > bottom) {
                        return true;
                    } else {
                        return null;
                    }
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
        case "l":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return null;
                case 1:
                    if(GameStatus.block.positionY / GameStatus.block.size + 1 > bottom) {
                        return true;
                    } else {
                        return null;
                    }
                case 2:
                    return null;
                case 3:
                    return null;
            }
            break;
    }
}

export default KickFloor;