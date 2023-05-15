import GameStatus from "../../status";
import BlockClass from "../../classes/BlockClass";
import DrawNextBlocks from "../drawNextBlocks/DrawNextBlocks";
import { Setting } from "../../setting";
import GameOver from "../gameover/GameOver";

for(let i = 0 ; i < 3 ; i++) { //this function is for test.
    GameStatus.nextBlock.push("l");
}

// for(let i = 0 ; i < 3 ; i++) { //Only first time, select four tetriminoes and show three of them at nextBlock, which is right side of Tetris game.
//     const rand = Math.floor(Math.random() * Setting.tetriNames.length);
//     GameStatus.nextBlock.push(Setting.tetriNames[rand]);
// }

const CreateRect = () => {
    const field = GameStatus.field.field;
    const x = Setting.block.initialX / Setting.block.size;
    const y = Setting.block.initialY / Setting.block.size;

    if(field[Setting.block.initialY / Setting.block.size][x] !== null) {
        GameOver();
        return;
    }
    // const newBlock = new BlockClass(Setting.block.size, Setting.block.initialX, Setting.block.initialY, GameStatus.blockCounter++, GameStatus.nextBlock[0]);
    // newBlock.setColor();
    // GameStatus.block = newBlock;
    // GameStatus.nextBlock.shift();
    // GameStatus.nextBlock.push("l"); //this lines are for test.

    const newBlock = new BlockClass(Setting.block.size, Setting.block.initialX, Setting.block.initialY, GameStatus.blockCounter++, GameStatus.nextBlock[0]);
    newBlock.setColor();
    GameStatus.block = newBlock;
    GameStatus.nextBlock.shift();
    const rand = Math.floor(Math.random() * Setting.tetriNames.length);
    GameStatus.nextBlock.push(Setting.tetriNames[rand]);
    DrawNextBlocks();
        switch(GameStatus.block.shape) {
        case "i":
            field[y][x] = GameStatus.block;
            field[y][x - 1] = GameStatus.block;
            field[y][x - 2] = GameStatus.block;
            field[y][x + 1] = GameStatus.block;
            break;
        case "o":
            field[y][x] = GameStatus.block;
            field[y][x - 1] = GameStatus.block;
            field[y + 1][x] = GameStatus.block;
            field[y + 1][x - 1] = GameStatus.block;
            break;
        case "t":
            field[y][x] = GameStatus.block;
            field[y][x - 1] = GameStatus.block;
            field[y][x + 1] = GameStatus.block;
            field[y - 1][x] = GameStatus.block;
            break;
        case "s":
            field[y][x] = GameStatus.block;
            field[y - 1][x] = GameStatus.block;
            field[y - 1][x + 1] = GameStatus.block;
            field[y][x - 1] = GameStatus.block;
            break;
        case "z":
            field[y][x] = GameStatus.block;
            field[y - 1][x - 1] = GameStatus.block;
            field[y - 1][x] = GameStatus.block;
            field[y][x + 1] = GameStatus.block;
            break;
        case "j":
            field[y][x] = GameStatus.block;
            field[y][x - 1] = GameStatus.block;
            field[y][x + 1] = GameStatus.block;
            field[y - 1][x - 1] = GameStatus.block;
            break;
        case "l":
            field[y][x] = GameStatus.block;
            field[y][x + 1] = GameStatus.block;
            field[y][x - 1] = GameStatus.block;
            field[y - 1][x + 1] = GameStatus.block;
            break;
    }
    return newBlock;
}

export default CreateRect;