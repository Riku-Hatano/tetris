import { RouteMatcher } from "next/dist/server/future/route-matchers/route-matcher";
import GameStatus from "../../../../status";

const KickRightWall = (rotationRight: boolean = true) => {
    const wall = 10;
    const field = GameStatus.field.field;
    const x = GameStatus.block.positionX / GameStatus.block.size;
    const y = GameStatus.block.positionY / GameStatus.block.size;
    const rs = rotationRight ? (GameStatus.block.rotateStatus + 1) % 4 : (GameStatus.block.rotateStatus + 3) % 4;

    switch(GameStatus.block.shape) {
        case "i":
            switch(rs) {
                case 0:
                    if(rotationRight) {
                        if(x + 1 >= wall && field[y][x - 1] === null && field[y][x - 2] === null) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if(x + 1 >= wall && field[y - 1][x - 1] === null && field[y - 1][x - 2] === null) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                case 1:
                    return false;
                case 2:
                    if(rotationRight) {
                        if(x + 1 >= wall && field[y][x - 1] === null && field[y][x - 2] === null) {
                            GameStatus.field.flags.twoBlocks = true;
                            return true;
                        } else if(x + 2 >= wall && field[y][x - 1] === null && field[y][x - 2] === null) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if(x + 1 >= wall && field[y + 1][x - 1] === null && field[y + 1][x - 2] === null) {
                            GameStatus.field.flags.twoBlocks = true;
                            return true;
                        } else if(x + 2 >= wall && field[y + 1][x - 1] === null && field[y + 1][x - 2] === null) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                case 3:
                    return false;
            }
            break;
        case "t":
            switch(rs) {
                case 0:
                    x + 1 >= wall && field[y][x - 2] === null ? true : false;
                case 1:
                    return false;
                case 2:
                    x + 1 >= wall && field[y][x - 2] === null ? true : false;
                case 3:
                    return false;
            }
            break;
        case "s":
            switch(rs) {
                case 0:
                    x + 1 >= wall && field[y][x - 2] === null ? true : false;
                case 1:
                    return false;
                case 2:
                    if(x + 1 >= wall && field[y][x - 2] === null) {
                        return true;
                    } else {
                        return false;
                    }
                case 3:
                    return false;
            }
            break;
        case "z":
            switch(rs) {
                case 0:
                    x + 1 >= wall && field[y][x - 2] === null ? true : false;
                case 1:
                    return false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
        case "j":
            switch(rs) {
                case 0:
                    x + 1 >= wall && field[y][x - 2] === null && field[y - 1][x - 2] === null ? true : false;
                case 1:
                    return false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
        case "l":
            switch(rs) {
                case 0:
                    x + 1 >= wall && field[y][x - 2] === null ? true : false;
                case 1:
                    return false;
                case 2:
                    return false;
                case 3:
                    return false;
            }
            break;
    }
}

export default KickRightWall;