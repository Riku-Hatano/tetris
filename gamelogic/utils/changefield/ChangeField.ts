import GameStatus from "../../status";
import DeletePrevouisBlock from "./DeletePreviousBlock";

const ChangeField = (movePixelX: number, movePixelY: number, isRotate: boolean = false) => {
    DeletePrevouisBlock();
    const field = GameStatus.field.field;
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;
    const moveX = movePixelX / GameStatus.block.size;
    const moveY = movePixelY / GameStatus.block.size;
    const rs = isRotate ? (GameStatus.block.rotateStatus + 1) % 4 : GameStatus.block.rotateStatus;

    switch(GameStatus.block.shape) {
        case "i":
            switch(rs) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
        case "o":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
        case "t":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
        case "s":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
        case "z":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
        case "j":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
        case "l":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
    }
}

export default ChangeField;