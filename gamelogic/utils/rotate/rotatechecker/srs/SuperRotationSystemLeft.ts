import GameStatus from "../../../../status";

const SuperRotationSystemLeft = () => {
    const field = GameStatus.field.field;
    let x = GameStatus.block.positionX / GameStatus.block.size;
    let y = GameStatus.block.positionY / GameStatus.block.size;

    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 3) % 4) {
                case 0:
                    if(field[y - 1][x - 2] === null && field[y - 1][x - 1] === null && field[y - 1][x + 1] === null) {
                        return 0;
                    } else if(field[y - 1][x + 1] === null && field[y - 1][x + 2] === null && field[y - 1][x + 3] === null) {
                        return 1;
                    } else if(field[y - 1][x - 3] === null && field[y - 1][x - 2] === null && field[y - 1][x - 1] === null) {
                        return 2;
                    } else if(field[y - 2][x + 1] === null && field[y - 2][x + 2] === null && field[y - 2][x + 3] === null) {
                        return 3;
                    } else if(field[y + 1][x - 3] === null && field[y + 1][x - 2] === null && field[y + 1][x - 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 1:
                    if(field[y - 2][x + 1] === null && field[y - 1][x + 1] === null && field[y + 1][x + 1] === null) {
                        return 0;
                    } else if(field[y - 2][x + 2] === null && field[y - 1][x + 2] === null && field[y + 1][x + 2] === null) {
                        return 1;
                    } else if(field[y - 2][x - 1] === null && field[y - 1][x - 1] === null && field[y + 1][x - 1] === null) {
                        return 2;
                    } else if(field[y + 1][x + 2] === null && field[y + 2][x + 2] === null && field[y + 3][x + 2] === null) {
                        return 3;
                    } else if(field[y - 1][x - 1] === null && field[y - 2][x - 1] === null && field[y - 3][x - 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 2:
                    if(field[y + 1][x - 1] === null && field[y + 1][x + 1] === null && field[y + 1][x + 2] === null) {
                        return 0;
                    } else if(field[y + 1][x + 1] === null && field[y + 1][x + 2] === null && field[y + 1][x + 3] === null) {
                        return 1;
                    } else if(field[y + 1][x - 3] === null && field[y + 1][x - 2] === null && field[y + 1][x - 1] === null) {
                        return 2;
                    } else if(field[y + 2][x - 3] === null && field[y + 2][x - 2] === null && field[y + 2][x - 1] === null) {
                        return 3;
                    } else if(field[y - 1][x + 1] === null && field[y - 1][x + 2] === null && field[y - 1][x + 3] === null) {
                        return 4;
                    } else {
                        return null;
                    }
                case 3:
                    if(field[y - 1][x - 1] === null && field[y + 1][x - 1] === null && field[y + 2][x - 1] === null) {
                        return 0;
                    } else if(field[y - 1][x - 2] === null && field[y + 1][x - 2] === null && field[y + 2][x - 2] === null) {
                        return 1;
                    } else if(field[y - 1][x + 1] === null && field[y + 1][x + 1] === null && field[y + 2][x + 1] === null) {
                        return 2;
                    } else if(field[y - 3][x - 2] === null && field[y - 2][x - 2] === null && field[y - 1][x - 2] === null) {
                        return 3;
                    } else if(field[y + 1][x + 1] === null && field[y + 2][x + 1] === null && field[y + 3][x + 1] === null) {
                        return 4;
                    } else {
                        return null;
                    }
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