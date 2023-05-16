import GameStatus from "../../../../status";

const SuperRotationSystem = () => {
    const field = GameStatus.field.field;
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y][x - 1] === null && field[y][x + 1] === null && field[y][x + 2] === null) {
                        return 0;
                    } else if(field[y][x - 3] === null && field[y][x - 2] === null && field[y][x - 1] === null) {
                        return 1;
                    } else if(field[y][x + 1] === null && field[y][x + 2] === null && field[y][x + 3] === null) {
                        return 2;
                    } else if(field[y + 2][x + 1] === null && field[y + 2][x + 2] === null && field[y + 2][x + 3] === null) {
                        return 3;
                    } else if(field[y - 1][x - 3] === null && field[y - 1][x - 2] === null && field[y - 1][x - 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 1:
                    if(field[y - 1][x] === null && field[y + 1][x] === null && field[y + 2][x] === null) {
                        return 0;
                    } else if(field[y - 1][x - 2] === null && field[y + 1][x - 2] === null && field[y + 2][x - 2] === null) {
                        return 1;
                    } else if(field[y - 1][x + 1] === null && field[y + 1][x + 1] === null && field[y + 2][x + 1] === null) {
                        return 2;
                    } else if(field[y + 1][x - 2] === null && field[y + 2][x - 2] === null && field[y + 3][x - 2] === null) {
                        return 3;
                    } else if(field[y - 1][x + 1] === null && field[y - 2][x + 1] === null && field[y - 3][x + 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 2:
                    if(field[y][x - 2] === null && field[y][x - 1] === null && field[y][x + 1] === null) {
                        return 0;
                    } else if(field[y][x - 3] === null && field[y][x - 2] === null && field[y][x - 1] === null) {
                        return 1;
                    } else if(field[y][x + 1] === null && field[y][x + 2] === null && field[y][x + 3] === null) {
                        return 2;
                    } else if(field[y - 2][x - 3] === null && field[y - 2][x - 2] === null && field[y - 2][x - 1] === null) {
                        return 3;
                    } else if(field[y + 1][x + 1] === null && field[y + 1][x + 2] === null && field[y + 1][x + 3] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 3:
                    if(field[y - 2][x] === null && field[y - 1][x] === null && field[y + 1][x] === null) {
                        return 0;
                    } else if(field[y - 2][x + 2] === null && field[y - 1][x + 2] === null && field[y + 1][x + 2] === null) {
                        return 1;
                    } else if(field[y - 2][x - 1] === null && field[y - 1][x - 1] === null && field[y + 1][x - 1] === null) {
                        return 2;
                    } else if(field[y - 3][x + 2] === null && field[y - 2][x + 2] === null && field[y - 1][x + 2] === null) {
                        return 3;
                    } else if(field[y + 1][x - 1] === null && field[y + 2][x - 1] === null && field[y + 3][x - 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
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
                        return null;
                    }
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
                        return null;
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
                        return null;
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
                        return null;
                    }
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y - 1][x] === null && field[y - 1][x + 1] === null) {
                        return 0;
                    } else if(field[y - 1][x] === null && field[y][x - 2] === null) {
                        return 1;
                    } else if(field[y + 1][x - 2] === null && field[y + 1][x - 1] === null) {
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 3][x] === null && field[y - 2][x] === null && field[y - 3][x + 1] === null) {
                        return 3;
                    } else if(field[y - 2][x - 2] === null && field[y - 3][x - 1] === null && field[y - 2][x - 1] === null && field[y - 3][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 1:
                    if(field[y][x + 1] === null && field[y + 1][x + 1] === null) {
                        return 0;
                    } else if(field[y - 1][x - 1] === null && field[y + 1][x] === null) {
                        return 1;
                    } else if(field[y - 1][x - 1] === null && field[y - 2][x - 1] === null) {
                        return 2;
                    } else if(field[y + 1][x] === null && field[y + 2][x] === null && field[y + 2][x + 2] === null && field[y + 3][x + 1] === null) {
                        return 3; //impossible pattern
                    } else if(field[y + 1][x - 1] === null && field[y + 2][x - 1] === null && field[y + 2][x] === null && field[y + 3][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 2:
                    if(field[y + 1][x - 1] === null && field[y + 1][x] === null) {
                        return 0;
                    } else if(field[y + 1][x] === null && field[y][x + 2] === null) {
                        return 1;
                    } else if(field[y + 2][x] === null && field[y + 2][x + 1] === null && field[y + 1][x + 2] === null) {
                        return 2;
                    } else if(field[y - 1][x - 1] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        return 3;
                    } else if(field[y - 1][x + 1] === null && field[y - 2][x + 1] === null && field[y - 2][x + 2] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 3:
                    if(field[y - 1][x - 1] === null && field[y][x - 1] === null) {
                        return 0;
                    } else if(field[y - 1][x] === null && field[y + 1][x + 1] === null) {
                        return 1;
                    } else if(field[y - 2][x] === null && field[y - 1][x] === null && field[y - 1][x + 1] === null) {
                        return 2;
                    } else if(field[y + 2][x - 1] === null && field[y + 2][x] === null && field[y + 3][x] === null) {
                        return 3;
                    } else if(field[y + 2][x] === null && field[y + 2][x + 1] === null && field[y + 3][x + 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y - 1][x - 1] === null && field[y][x + 1] === null) {
                        return 0;
                    } else if(field[y - 1][x - 2] === null && field[y - 1][x - 1] === null) {
                        return 1;
                    } else if(field[y][x - 2] === null && field[y + 1][x] === null) {
                        return 2;
                    } else if(field[y - 3][x - 1] === null && field[y - 3][x] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        return 3;
                    } else if(field[y - 3][x - 2] === null && field[y - 3][x - 1] === null && field[y - 2][x - 1] === null && field[y - 2][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 1:
                    if(field[y - 1][x + 1] === null && field[y + 1][x] === null) {
                        return 0;
                    } else if(field[y][x - 1] === null && field[y + 1][x - 1] === null) {
                        return 1;
                    } else if(field[y - 2][x] === null && field[y][x - 1] === null) {
                        return 2;
                    } else if(field[y + 2][x] === null && field[y + 3][x] === null && field[y + 1][x + 1] === null && field[y + 2][x + 1] === null) {
                        return 3;
                    } else if(field[y + 2][x - 1] === null && field[y + 3][x - 1] === null && field[y + 1][x] === null && field[y + 2][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 2:
                    if(field[y][x - 1] === null && field[y + 1][x + 1] === null) {
                        return 0;
                    } else if(field[y + 1][x + 1] === null && field[y + 1][x + 2] === null) {
                        return 1;
                    } else if(field[y + 1][x + 1] === null && field[y + 2][x + 1] === null && field[y + 2][x + 2] === null) {
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 1][x] === null) {
                        return 3;
                    } else if(field[y - 2][x] === null && field[y - 2][x + 1] === null && field[y - 1][x + 2] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 3:
                    if(field[y - 1][x] === null && field[y + 1][x - 1] === null) {
                        return 0;
                    } else if(field[y - 1][x + 1] === null && field[y][x + 1] === null) {
                        return 1;
                    } else if(field[y - 1][x] === null && field[y - 2][x + 1] === null && field[y - 1][x + 1] === null) {
                        return 2;
                    } else if(field[y + 2][x - 1] === null && field[y + 3][x - 1] === null && field[y + 2][x] === null) {
                        return 3;
                    } else if(field[y + 2][x] === null && field[y + 3][x] === null && field[y + 2][x + 1] === null) {
                        return 4;
                    } else {
                        return null;
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
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(field[y][x - 1] === null && field[y][x + 1] === null && field[y - 1][x + 1] === null) {
                        return 0;
                    } else if(field[y][x - 1] === null && field[y][x - 2] === null) {
                        return 1;
                    } else if(field[y + 1][x - 2] === null && field[y + 1][x - 1] === null) {
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 2][x] === null && field[y - 3][x + 1] === null && field[y - 2][x + 1] === null) {
                        return 3;
                    } else if(field[y - 2][x - 2] === null && field[y - 2][x - 1] === null && field[y - 3][x] === null && field[y - 2][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 1:
                    if(field[y - 1][x] === null && field[y + 1][x] === null && field[y + 1][x + 1] === null) {
                        return 0;
                    } else if(field[y - 1][x - 1] === null && field[y + 1][x - 1] === null && field[y + 1][x] === null) {
                        return 1;
                    } else if(field[y - 2][x - 1] === null && field[y - 1][x - 1] === null) {
                        return 2;
                    } else if(field[y + 3][x] === null && field[y + 2][x] === null && field[y + 1][x] === null && field[y + 3][x + 1] === null) {
                        return 3;
                    } else if(field[y + 3][x - 1] === null && field[y + 2][x - 1] === null && field[y + 1][x - 1] === null && field[y + 3][x] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 2:
                    if(field[y][x - 1] === null && field[y + 1][x - 1] === null && field[y][x + 1] === null) {
                        return 0;
                    } else if(field[y][x + 1] === null && field[y][x + 2] === null) {
                        return 1;
                    } else if(field[y + 2][x] === null && field[y + 1][x + 2] === null) {
                        return 2;
                    } else if(field[y - 2][x - 1] === null && field[y - 1][x - 1] === null && field[y - 2][x] === null && field[y - 2][x + 1] === null) {
                        return 3;
                    } else if(field[y - 2][x] === null && field[y - 2][x + 1] === null && field[y - 2][x + 2] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 3:
                    if(field[y - 1][x - 1] === null && field[y - 1][x] === null && field[y + 1][x] === null) {
                        return 0;
                    } else if(field[y - 1][x] === null && field[y - 1][x + 1] === null && field[y + 1][x + 1] === null) {
                        return 1;
                    } else if(field[y - 2][x] === null && field[y - 2][x + 1] === null && field[y - 1][x + 1] === null) {
                        return 2;
                    } else if(field[y + 1][x] === null && field[y + 2][x] === null && field[y + 3][x] === null) {
                        return 3;
                    } else if(field[y + 1][x] === null && field[y + 1][x + 1] === null && field[y + 2][x + 1] === null && field[y + 3][x + 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
            }
            break;
    }
}

export default SuperRotationSystem;