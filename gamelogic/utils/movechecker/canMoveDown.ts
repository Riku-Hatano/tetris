import GameStatus from "../../status";
import { speedSetting } from "../../setting";
import CalcPiles from "../gettobottom/CalcPiles";

const canMoveDown = () => {
    const field = GameStatus.field.field;
    const bottom = GameStatus.field.field.length - (GameStatus.block.initialY / GameStatus.block.size);
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;

    switch(GameStatus.block.shape) {
        case "i":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(y > bottom) { return false; } //check tetrimino is the bottom of field
                    if(field[y + 1][x - 2] === null && field[y + 1][x - 1] === null && field[y + 1][x] === null && field[y + 1][x + 1] === null) {
                        return true; 
                    } else {
                        return false;
                    }
                case 1:
                    if(y + 2 > bottom) { return false; } //check tetrimino is the bottom of field
                    if(field[y + 3][x] === null) {
                        return true;
                    } else {
                        return false;
                    }
                case 2:
                    if(y > bottom) { return false; } //check tetrimino is the bottom of field
                    if(field[y + 1][x - 1] === null && field[y + 1][x] === null && field[y + 1][x + 1] === null && field[y + 1][x + 2] === null) {
                        return true; 
                    } else {
                        return false;
                    }
                case 3:
                    if(y + 1 > bottom) { return false; } //check tetrimino is the bottom of field
                    if(field[y + 2][x] === null) {
                        return true;
                    } else {
                        return false;
                    }
            }
            break;
        case "o":
            if(y + 1 > bottom) { return false; } //check tetrimino is the bottom of field
            if(field[y + 2][x] === null && field[y + 2][x - 1] === null) {
                return true;
            } else {
                return false;
            }
        case "t":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("down t 0");
                    return true;
                    break;
                case 1:
                    console.log("down t 1");
                    return true;
                    break;
                case 2:
                    console.log("down t 2");
                    return true;
                    break;
                case 3:
                    console.log("down t 3");
                    return true;
                    break;
            }
            break;
        case "s":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("down s 0");
                    return true;
                    break;
                case 1:
                    console.log("down s 1");
                    return true;
                    break;
                case 2:
                    console.log("down s 2");
                    return true;
                    break;
                case 3:
                    console.log("down s 3");
                    return true;
                    break;
            }
            break;
        case "z":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("down z 0");
                    return true;
                    break;
                case 1:
                    console.log("down z 1");
                    return true;
                    break;
                case 2:
                    console.log("down z 2");
                    return true;
                    break;
                case 3:
                    console.log("down z 3");
                    return true;
                    break;
            }
            break;
        case "j":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("down j 0");
                    return true;
                    break;
                case 1:
                    console.log("down j 1");
                    return true;
                    break;
                case 2:
                    console.log("down j 2");
                    return true;
                    break;
                case 3:
                    console.log("down j 3");
                    return true;
                    break;
            }
            break;
        case "l":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    console.log("down l 0");
                    return true;
                    break;
                case 1:
                    console.log("down l 1");
                    return true;
                    break;
                case 2:
                    console.log("down l 2");
                    return true;
                    break;
                case 3:
                    console.log("down l 3");
                    return true;
                    break;
            }
            break;
    }
}

export default canMoveDown;