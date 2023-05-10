import GameStatus from "../../status";
import BlockClass from "../../classes/BlockClass";
import DrawNextBlocks from "../drawNextBlocks/DrawNextBlocks";
import { Setting } from "../../setting";
import GameOver from "../gameover/GameOver";

// for(let i = 0 ; i < 3 ; i++) { //this function is for test.
//     GameStatus.nextBlock.push("l");
// }

for(let i = 0 ; i < 3 ; i++) { //Only first time, select four tetriminoes and show three of them at nextBlock, which is right side of Tetris game.
    const rand = Math.floor(Math.random() * Setting.tetriNames.length);
    GameStatus.nextBlock.push(Setting.tetriNames[rand]);
}

const CreateRect = () => {
    if(GameStatus.field.field[Setting.block.initialY / Setting.block.size][Setting.block.initialX / Setting.block.size] !== null) {
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
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 2] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block;
            break;
        case "o":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size + 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size + 1][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            break;
        case "t":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            break;
        case "s":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            break;
        case "z":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block;
            break;
        case "j":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            break;
        case "l":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block;
            break;
    }
    return newBlock;
}

export default CreateRect;