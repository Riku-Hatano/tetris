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
                        console.log("0");
                        return 0;
                    } else if(field[y - 2][x - 2] === null && field[y - 1][x - 2] === null && field[y + 1][x - 2] === null) {
                        console.log("1");
                        return 1;
                    } else if(field[y - 2][x + 1] === null && field[y - 1][x + 1] === null && field[y + 1][x + 1] === null) {
                        console.log("2");
                        return 2;
                    } else if(field[y + 1][x - 2] === null && field[y + 2][x - 2] === null && field[y + 3][x - 2] === null) {
                        console.log("3");
                        return 3;
                    } else if(field[y - 3][x + 1] === null && field[y - 2][x + 1] === null && field[y - 1][x + 1] === null) {
                        console.log("4");
                        return 4;
                    } else {
                        return null;
                    }
                case 2:
                    if(field[y][x - 1] === null && field[y][x] === null && field[y][x + 1] === null && field[y][x - 2] === null) { //fundamental point would be move to -1 in X direction because of the adjustment of i mino.
                        return 0;
                    } else if(field[y][x - 2] === null && field[y][x - 1] === null && field[y][x] === null && field[y][x - 3] === null) {
                        return 1;
                    } else if(field[y][x + 1] === null && field[y][x + 2] === null && field[y][x + 3] === null && field[y][x] === null) {
                        return 2;
                    } else if(field[y - 2][x - 2] === null && field[y - 2][x - 2] === null && field[y - 2][x - 1] === null && field[y - 2][x - 4] === null) {
                        return 3;
                    } else {
                        return false;
                    }
                    break;
                case 3:
                    break;
            }
            break;
        case "t":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y][x + 1] === null) {
                        return 0;
                    } else if(field[y - 1][x - 1] === null && field[y][x - 2] === null) {
                        return 1;
                    } else if(field[y + 1][x - 1] === null && field[y + 1][x - 2] === null) {
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null && field[y - 3][x] === null) {
                        return 3;
                    } else if(field[y - 2][x - 2] === null && field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 3][x - 1] === null) {
                        return 4;
                    } else {
                        return false;
                    }
                    break;
                case 1:
                    if(field[y + 1][x] === null) {
                        return 0;
                    } else if(field[y - 1][x - 1] === null && field[y][x] === null && field[y + 1][x - 1] === null) {
                        return 1;
                    } else if(field[y - 2][x - 1] === null && field[y - 1][x - 1] === null) {
                        return 2;
                    } else if(field[y + 1][x] === null && field[y + 2][x] === null && field[y + 3][x] === null) {
                        return 3;
                    } else if(field[y + 1][x - 1] === null && field[y + 2][x - 1] === null && field[y + 3][x - 1] === null && field[y + 2][x] === null){
                        return 4;
                    } else {
                        return false;
                    }
                case 2:
                    if(field[y][x - 1] === null) {
                        return 0;
                    } else if(field[y][x] === null && field[y][x + 2] === null && field[y + 1][x + 1] === null) {
                        return 1;
                    } else if(field[y + 1][x + 1] === null && field[y + 1][x + 2] === null && field[y + 2][x + 1] === null) {
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        return 3;
                    } else if(field[y - 2][x] === null && field[y - 2][x + 1] === null && field[y - 2][x + 2] === null && field[y - 1][x + 1] === null) {
                        return 4;
                    } else {
                        return false;
                    }
                case 3:
                    if(field[y - 1][x] === null) {
                        return 0;
                    } else if(field[y - 1][x + 1] === null && field[y][x] === null && field[y + 1][x + 1] === null) {
                        return 1;
                    } else if(field[y - 1][x] === null && field[y - 2][x + 1] === null && field[y - 1][x + 1] === null && field[y][x + 1] === null) {
                        return 2;
                    } else if(field[y + 2][x] === null && field[y + 3][x] === null && field[y + 2][x - 1] === null) {
                        return 3;
                    } else if(field[y + 2][x] === null && field[y + 1][x + 1] === null && field[y + 2][x + 1] === null && field[y + 3][x + 1] === null) {
                        return 4;
                    } else {
                        return false;
                    }
            }
            return 0;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y - 1][x] === null && field[y - 1][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 0`)
                        return 0;
                    } else if(field[y - 1][x] === null && field[y][x - 2] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 1`)
                        return 1;
                    } else if(field[y + 1][x - 2] === null && field[y + 1][x - 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 2`)
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 3][x] === null && field[y - 2][x] === null && field[y - 3][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 3`)
                        return 3;
                    } else if(field[y - 2][x - 2] === null && field[y - 3][x - 1] === null && field[y - 2][x - 1] === null && field[y - 3][x] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus}  return: 4`)
                        return 4;
                    } else {
                        return false;
                    }
                    break;
                case 1:
                    if(field[y][x + 1] === null && field[y + 1][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 0`)
                        return 0;
                    } else if(field[y - 1][x - 1] === null && field[y + 1][x] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 1`)
                        return 1;
                    } else if(field[y - 1][x - 1] === null && field[y - 2][x - 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 2`)
                        return 2;
                    } else if(field[y + 1][x] === null && field[y + 2][x] === null && field[y + 2][x + 2] === null && field[y + 3][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 3`)
                        return 3; //impossible pattern
                    } else if(field[y + 1][x - 1] === null && field[y + 2][x - 1] === null && field[y + 2][x] === null && field[y + 3][x] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 4`)
                        return 4;
                    } else {
                        return false;
                    }
                    break;
                case 2:
                    if(field[y + 1][x - 1] === null && field[y + 1][x] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 0`)
                        return 0;
                    } else if(field[y + 1][x] === null && field[y][x + 2] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 1`)
                        return 1;
                    } else if(field[y + 2][x] === null && field[y + 2][x + 1] === null && field[y + 1][x + 2] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 2`)
                        return 2;
                    } else if(field[y - 1][x - 1] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 3`)
                        return 3;
                    } else if(field[y - 1][x + 1] === null && field[y - 2][x + 1] === null && field[y - 2][x + 2] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 4`)
                        return 4;
                    } else {
                        return false;
                    }
                    break;
                case 3:
                    if(field[y - 1][x - 1] === null && field[y][x - 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 0`)
                        return 0;
                    } else if(field[y - 1][x] === null && field[y + 1][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 1`)
                        return 1;
                    } else if(field[y - 2][x] === null && field[y - 1][x] === null && field[y - 1][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 2`)
                        return 2;
                    } else if(field[y + 2][x - 1] === null && field[y + 2][x] === null && field[y + 3][x] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 3`)
                        return 3;
                    } else if(field[y + 2][x] === null && field[y + 2][x + 1] === null && field[y + 3][x + 1] === null) {
                        console.log(`shape: ${GameStatus.block.shape} rs: ${GameStatus.block.rotateStatus} return: 4`)
                        return 4;
                    } else {
                        return false;
                    }
                    break;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y - 1][x - 1] === null && field[y][x + 1] === null) {
                        console.log("z case3 return 0");
                        return 0;
                    } else if(field[y - 1][x - 2] === null && field[y - 1][x - 1] === null) {
                        console.log("z case3 return 1");
                        return 1;
                    } else if(field[y][x - 2] === null && field[y + 1][x] === null) {
                        console.log("z case3 return 2");
                        return 2;
                    } else if(field[y - 3][x - 1] === null && field[y - 3][x] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        console.log("z case3 return 3");
                        return 3;
                    } else if(field[y - 3][x - 2] === null && field[y - 3][x - 1] === null && field[y - 2][x - 1] === null && field[y - 2][x] === null) {
                        console.log("z case3 return 4");
                        return 4;
                    }
                case 1:
                    if(field[y - 1][x + 1] === null && field[y + 1][x] === null) {
                        console.log("z case0 return0");
                        return 0;
                    } else if(field[y][x - 1] === null && field[y + 1][x - 1] === null) {
                        console.log("z case0 return1");
                        return 1;
                    } else if(field[y - 2][x] === null && field[y][x - 1] === null) {
                        console.log("z case0 return2");
                        return 2;
                    } else if(field[y + 2][x] === null && field[y + 3][x] === null && field[y + 1][x + 1] === null && field[y + 2][x + 1] === null) {
                        console.log("z case0 return3");
                        return 3;
                    } else if(field[y + 2][x - 1] === null && field[y + 3][x - 1] === null && field[y + 1][x] === null && field[y + 2][x] === null) {
                        console.log("z case0 return4");
                        return 4;
                    }
                case 2:
                    if(field[y][x - 1] === null && field[y + 1][x + 1] === null) {
                        console.log("z case2 return0")
                        return 0;
                    } else if(field[y + 1][x + 1] === null && field[y + 1][x + 2] === null) {
                        console.log("z case2 return1")
                        return 1;
                    } else if(field[y + 1][x + 1] === null && field[y + 2][x + 1] === null && field[y + 2][x + 2] === null) {
                        console.log("z case2 return2")
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 1][x] === null) {
                        console.log("z case2 return3")
                        return 3;
                    } else if(field[y - 2][x] === null && field[y - 2][x + 1] === null && field[y - 1][x + 2] === null) {
                        console.log("z case2 return4")
                        return 4;
                    } else {
                        return false;
                    }
                case 3:
                    if(field[y - 1][x] === null && field[y + 1][x - 1] === null) {
                        console.log("z case2 return0");
                        return 0;
                    } else if(field[y - 1][x + 1] === null && field[y][x + 1] === null) {
                        console.log("z case2 return1");
                        return 1;
                    } else if(field[y - 1][x] === null && field[y - 2][x + 1] === null && field[y - 1][x + 1] === null) {
                        console.log("z case2 return 2");
                        return 2;
                    } else if(field[y + 2][x - 1] === null && field[y + 3][x - 1] === null && field[y + 2][x] === null) {
                        console.log("z case2 return 3");
                        return 3;
                    } else if(field[y + 2][x] === null && field[y + 3][x] === null && field[y + 2][x + 1] === null) {
                        console.log("z case2 return 4");
                        return 4;
                    }
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y - 1][x - 1] === null && field[y][x - 1] === null && field[y][x + 1] === null) {
                        return 0;
                    } else if(field[y - 1][x - 2] === null && field[y][x - 2] === null && field[y][x - 1] === null) {
                        return 1;
                    } else if(field[y][x - 2] === null && field[y + 1][x - 2] === null) {
                        return 2;
                    } else if(field[y - 3][x - 1] === null && field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        return 3;
                    } else if(field[y - 3][x - 2] === null && field[y - 2][x - 2] === null && field[y - 2][x - 1] === null && field[y - 2][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 1:
                    if(field[y - 1][x] === null && field[y + 1][x] === null && field[y - 1][x + 1] === null) {
                        return 0;
                    } else if(field[y + 1][x - 1] === null && field[y - 1][x] === null) {
                        return 1;
                    } else if(field[y - 2][x - 1] === null && field[y - 2][x] === null) {
                        return 2;
                    } else if(field[y + 3][x] === null && field[y + 2][x] === null && field[y + 1][x] === null && field[y + 1][x + 1] === null) {
                        return 3;
                    } else if(field[y + 3][x - 1] === null && field[y + 2][x - 1] === null && field[y + 1][x - 1] === null && field[y + 1][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 2:
                    if(field[y][x - 1] === null && field[y][x + 1] === null && field[y + 1][x + 1] === null) {
                        return 0;
                    } else if(field[y][x + 1] === null && field[y][x + 2] === null && field[y + 1][x + 2] === null) {
                        return 1;
                    } else if(field[y + 1][x + 1] === null && field[y + 1][x + 2] === null && field[y + 2][x + 2] === null) {
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        return 3;
                    } else if(field[y - 2][x] === null && field[y - 2][x + 1] === null && field[y - 2][x + 2] === null && field[y - 1][x + 2] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 3:
                    if(field[y - 1][x] === null && field[y + 1][x] === null && field[y + 1][x - 1] === null) {
                        return 0;
                    } else if(field[y - 1][x + 1] === null && field[y + 1][x] === null) {
                        return 1;
                    } else if(field[y - 2][x + 1] === null && field[y - 1][x + 1] === null) {
                        return 2;
                    } else if(field[y + 3][x - 1] === null && field[y + 1][x] === null && field[y + 2][x] === null && field[y + 3][x] === null) {
                        return 3;
                    } else if(field[y + 3][x] === null && field[y + 2][x + 1] === null && field[y + 3][x + 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
            }

            break;
        case "l":
            break;
    }
}

export default SuperRotationSystem;