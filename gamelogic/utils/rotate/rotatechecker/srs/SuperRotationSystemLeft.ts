import GameStatus from "../../../../status";

const SuperRotationSystemLeft = () => {
    const field = GameStatus.field.field;
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;

    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus - 1) % 4) {
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
            console.log("o mino doesn't rotate");
            break;
        case "t":
            switch((GameStatus.block.rotateStatus - 1) % 4) {
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
            switch((GameStatus.block.rotateStatus - 1) % 4) {
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
            switch((GameStatus.block.rotateStatus - 1) % 4) {
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
            switch((GameStatus.block.rotateStatus - 1) % 4) {
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
            switch((GameStatus.block.rotateStatus - 1) % 4) {
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

export default SuperRotationSystemLeft;