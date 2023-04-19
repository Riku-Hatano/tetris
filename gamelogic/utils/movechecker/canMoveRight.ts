import GameStatus from "../../status";
import { speedSetting } from "../../setting";


const canMoveRight = (): boolean => {
    const field = GameStatus.field.field;
    const wall = GameStatus.field.field[0].length;
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;

    switch(GameStatus.block.shape) {
        case "i":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(x + 2 < wall && field[y][x + 2] === null) { return true; }
                    break;
                case 1:
                    if(x + 1 < wall && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x + 1] === null && field[y + 2][x + 1] === null) { return true; }
                    break;
                case 2:
                    if(x + 3 < wall && field[y][x + 3] === null) { return true; }
                    break;
                case 3:
                    if(x + 1 < wall && field[y - 2][x + 1] === null && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
            }
            break;
        case "o":
            if(x + 1 < wall && field[y][x + 1] === null && field[y + 1][x + 1] === null) { return true; }
            break;
        case "t":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(x + 2 < wall && field[y][x + 2] === null && field[y - 1][x + 1] === null) { return true; }
                    break;
                case 1:
                    if(x + 2 < wall && field[y - 1][x + 1] === null && field[y][x + 2] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
                case 2:
                    if(x + 2 < wall && field[y][x + 2] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
                case 3:
                    if(x + 1 < wall && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
            }
            break;
        case "s":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(x + 2 < wall && field[y][x + 1] === null && field[y - 1][x + 2] === null) { return true; }
                    break;
                case 1:
                    if(x + 2 < wall && field[y - 1][x + 1] === null && field[y][x + 2] === null && field[y + 1][x + 2] === null) { return true; }
                    break;
                case 2:
                    if(x + 2 < wall && field[y][x + 2] === null && field[y - 1][x + 1] === null) { return true; }
                    break;
                case 3:
                    if(x + 1 < wall && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x] === null) { return true; }
                    break;
            }
            break;
        case "z":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(x + 2 < wall && field[y][x + 1] === null && field[y + 1][x + 2] === null) { return true; }
                    break;
                case 1:
                    if(x + 1 < wall && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x] === null) { return true; }
                    break;
                case 2:
                    if(x + 2 < wall && field[y - 1][x + 1] === null && field[y][x + 2] === null) { return true; }
                    break;
                case 3:
                    if(x + 2 < wall && field[y - 1][x + 2] === null && field[y][x + 2] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
            }
            break;
        case "j":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(x + 2 < wall && field[y - 1][x] === null && field[y][x + 2] === null) { return true; }
                    break;
                case 1:
                    if(x + 2 < wall && field[y - 1][x + 2] === null && field[y][x + 1] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
                case 2:
                    if(x + 2 < wall && field[y][x + 2] === null && field[y + 1][x + 2] === null) { return true; }
                    break;
                case 3:
                    if(x + 1 < wall && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
            }
            break;
        case "l":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    if(x + 2 < wall && field[y - 1][x + 2] === null && field[y][x + 2] === null) { return true; }
                    break;
                case 1:
                    if(x + 2 < wall && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x + 2] === null) { return true; }
                    break;
                case 2:
                    if(x + 2 < wall && field[y][x + 2] === null && field[y + 1][x] === null) { return true; }
                    break;
                case 3:
                    if(x + 1 < wall && field[y - 1][x + 1] === null && field[y][x + 1] === null && field[y + 1][x + 1] === null) { return true; }
                    break;
            }
            break;   
    }
}

export default canMoveRight;