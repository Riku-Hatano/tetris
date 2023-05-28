import GameStatus from "../../../../status";

const KickFloor = (rotationRight: boolean = true) => {
    const field = GameStatus.field.field;
    const bottom = field.length - (GameStatus.block.initialY / GameStatus.block.size);
    const x = GameStatus.block.positionX / GameStatus.block.size;
    const y = GameStatus.block.positionY / GameStatus.block.size;
    const rs = rotationRight ? (GameStatus.block.rotateStatus + 1) % 4 : (GameStatus.block.rotateStatus + 3) % 4;
   
    switch(GameStatus.block.shape) {
        case "i":
            switch(rs) {
                case 0:
                    return false;
                case 1:
                    if(y + 1 > bottom && field[y - 1][x] === null && field[y - 2][x] === null) {
                        return true;
                    } else {
                        return false;
                    }
                case 2:
                    return false;
                case 3:
                    if(y + 1 > bottom  && field[y - 1][x] === null && field[y - 2][x] === null) {
                        GameStatus.field.flags.twoBlocks = true;
                        return true;
                    } else if(y + 2 > bottom && field[y - 1][x] === null && field[y - 2][x] === null) {
                        return true;
                    } else {
                        return false;
                    }
            }
            break;
        case "t":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return false;
                case 1:
                    y > bottom && field[y - 2][x] === null ? true : false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return false;
                case 1:
                    y + 1 > bottom && field[y - 2][x] === null ? true : false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return false;
                case 1:
                    y + 1 > bottom && field[y - 2][x + 1] === null ? true : false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return false;
                case 1:
                    y + 1 > bottom && field[y - 2][x] === null && field[y - 2][x + 1] === null ? true : false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
        case "l":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return false;
                case 1:
                    y + 1 > bottom ? true : false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
    }
}

export default KickFloor;