import GameStatus from "../../status";
import DeletePrevouisBlock from "./DeletePreviousBlock";

const ChangeField = (movePixelX: number, movePixelY: number, isRotate: boolean = false, doDelete: boolean = true) => {
    doDelete ? DeletePrevouisBlock() : console.log("dont delete previous block");
    GameStatus.block.positionX += movePixelX;
    GameStatus.block.positionY += movePixelY;
    const field = GameStatus.field.field;
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;
    const rs = isRotate ? (GameStatus.block.rotateStatus + 1) % 4 : GameStatus.block.rotateStatus;

    switch(GameStatus.block.shape) {
        case "i":
            switch(rs) {
                case 0:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y][x - 2] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    break;
                case 1:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block; 
                    field[y - 2][x] = GameStatus.block; 
                    field[y + 1][x] = GameStatus.block;
                    break;
                case 2:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y][x + 2] = GameStatus.block;
                    break;
                case 3:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    field[y + 2][x] = GameStatus.block;
                    break;
            }
            break;
        case "o":
            field[y][x] = GameStatus.block;
            field[y][x - 1] = GameStatus.block;
            field[y + 1][x] = GameStatus.block;
            field[y + 1][x - 1] = GameStatus.block;
            break;
        case "t":
            switch(rs) {
                case 0:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    break;
                case 1:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    break;
                case 2:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    break;
                case 3:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    break;
            }
            break;
        case "s":
            switch(rs) {
                case 0:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y - 1][x + 1] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    break;
                case 1:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y + 1][x + 1] = GameStatus.block;
                    break;
                case 2:
                    field[y][x] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y + 1][x - 1] = GameStatus.block;
                    break;
                case 3:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x - 1] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    break;
            }
            break;
        case "z":
            switch(rs) {
                case 0:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y - 1][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block
                break;
                case 1:
                        field[y][x] = GameStatus.block;
                        field[y - 1][x + 1] = GameStatus.block;
                        field[y][x + 1] = GameStatus.block;
                        field[y + 1][x] = GameStatus.block;
                    break;
                case 2:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    field[y + 1][x + 1] = GameStatus.block;
                break;
                case 3:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y ][x - 1] = GameStatus.block;
                    field[y + 1][x - 1] = GameStatus.block;
                break;
                }
            break;
        case "j":
            switch(rs) {
                case 0:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    break;
                case 1:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    field[y - 1][x + 1] = GameStatus.block;
                    break;
                case 2:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y + 1][x + 1] = GameStatus.block;
                    break;
                case 3:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    field[y + 1][x - 1] = GameStatus.block;
                    break;
            }
            break;
        case "l":
            switch(rs) {
                case 0:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y - 1][x + 1] = GameStatus.block;
                    break;
                case 1:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    field[y + 1][x + 1] = GameStatus.block;
                    break;
                case 2:
                    field[y][x] = GameStatus.block;
                    field[y][x - 1] = GameStatus.block;
                    field[y][x + 1] = GameStatus.block;
                    field[y + 1][x - 1] = GameStatus.block;
                    break;
                case 3:
                    field[y][x] = GameStatus.block;
                    field[y - 1][x] = GameStatus.block;
                    field[y + 1][x] = GameStatus.block;
                    field[y - 1][x - 1] = GameStatus.block;
                    break;
            }
            break;
    }
    isRotate ? GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4 : false;
    GameStatus.field.field = field;
}

export default ChangeField;