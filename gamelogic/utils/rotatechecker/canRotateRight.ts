import GameStatus from "../../status";

const CanRotateRight = () => {
    const field = GameStatus.field.field;
    const bottom = GameStatus.field.field.length - (GameStatus.block.initialY / GameStatus.block.size);
    const wall = 10;
    const x = GameStatus.block.positionX / GameStatus.block.size;
    const y = GameStatus.block.positionY / GameStatus.block.size;
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("turn: right shape: i rs: 0");
                    if(x + 2 > wall) { return false; }
                    if(y > bottom) { return false; }
                    if(field[y][x - 2] === null && field[y][x - 1] === null && field[y][x + 1] === null) { return true; }
                    break;
                case 1:
                    console.log("turn: right shape: i rs: 1");
                    if(x + 1 > wall) { return false; }
                    if(y + 2 > bottom) { return false; }
                    if(field[y - 1][x] === null && field[y + 1][x] === null && field[y + 2][x] === null) { return true; }
                    break;
                case 2:
                    console.log("turn: right shape: i rs: 2");
                    return true;
                    break;
                case 3:
                    console.log("turn: right shape: i rs: 3");
                    return true;
                    break;
            }
            break;
        case "o":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("turn: right shape: o rs: 0");
                    return true;
                    break;
                case 1:
                    console.log("turn: right shape: o rs: 1");
                    return true;
                    break;
                case 2:
                    console.log("turn: right shape: o rs: 2");
                    return true;
                    break;
                case 3:
                    console.log("turn: right shape: o rs: 3");
                    return true;
                    break;
            }
            break;
        case "t":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("turn: right shape: t rs: 0");
                    return true;
                    break;
                case 1:
                    console.log("turn: right shape: t rs: 1");
                    return true;
                    break;
                case 2:
                    console.log("turn: right shape: t rs: 2");
                    return true;
                    break;
                case 3:
                    console.log("turn: right shape: t rs: 3");
                    return true;
                    break;
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("turn: right shape: s rs: 0");
                    return true;
                    break;
                case 1:
                    console.log("turn: right shape: s rs: 1");
                    return true;
                    break;
                case 2:
                    console.log("turn: right shape: s rs: 2");
                    return true;
                    break;
                case 3:
                    console.log("turn: right shape: s rs: 3");
                    return true;
                    break;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("turn: right shape: z rs: 0");
                    return true;
                    break;
                case 1:
                    console.log("turn: right shape: z rs: 1");
                    return true;
                    break;
                case 2:
                    console.log("turn: right shape: z rs: 2");
                    return true;
                    break;
                case 3:
                    console.log("turn: right shape: z rs: 3");
                    return true;
                    break;
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("turn: right shape: j rs: 0");
                    return true;
                    break;
                case 1:
                    console.log("turn: right shape: j rs: 1");
                    return true;
                    break;
                case 2:
                    console.log("turn: right shape: j rs: 2");
                    return true;
                    break;
                case 3:
                    console.log("turn: right shape: j rs: 3");
                    return true;
                    break;
            }
            break;
        case "l":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    console.log("turn: right shape: l rs: 0");
                    return true;
                    break;
                case 1:
                    console.log("turn: right shape: l rs: 1");
                    return true;
                    break;
                case 2:
                    console.log("turn: right shape: l rs: 2");
                    return true;
                    break;
                case 3:
                    console.log("turn: right shape: l rs: 3");
                    return true;
                    break;
            }
            break;
    }
}

export default CanRotateRight;