import GameStatus from "../../../../status";
import { speedSetting } from "../../../../setting";

const SuperRotationSystem = () => {
    const field = GameStatus.field.field;
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    return 0;
                case 1:
                    if(field[y - 2][x] === null && field[y - 1][x] === null && field[y][x] === null && field[y + 1][x] === null) { //fundamental point would be move to -1 in Y direction because of the adjustment of i mino
                        return 0;
                    } else if(field[y - 2][x - 2] === null && field[y - 1][x -2] === null && field[y][x - 2] === null && field[y + 1][x - 2] === null) {
                        return 1;
                    } else {
                        return 2;
                    }
                case 2:
                    break;
                case 3:
                    break;
            }
            break;
        case "t":
            break;
        case "s":
            break;
        case "z":
            break;
        case "j":
            break;
        case "l":
            break;
    }
}

export default SuperRotationSystem;