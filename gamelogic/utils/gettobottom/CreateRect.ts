import GameStatus from "../../status";
import BlockClass from "../../classes/BlockClass";
import DrawNextBlocks from "../drawNextBlocks/DrawNextBlocks";
import { blockSetting } from "../../setting";
import GameOver from "../gameover/GameOver";

const TetriNames = [
    "i", "o", "t", "s", "z", "j", "l"
]

for(let i = 0 ; i < 3 ; i++) { //this function is for test.
    GameStatus.nextBlock.push("l");
}

// for(let i = 0 ; i < 3 ; i++) { //Only first time, select four tetriminoes and show three of them at nextBlock, which is right side of Tetris game.
//     const rand = Math.floor(Math.random() * 7);
//     GameStatus.nextBlock.push(TetriNames[rand]);
// }

const CreateRect = () => {
    if(GameStatus.field.field[blockSetting.initialY / blockSetting.size][blockSetting.initialX / blockSetting.size] !== null) {
        GameOver();
        return;
    }
    const newBlock = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter++, GameStatus.nextBlock[0]);
    newBlock.setColor();
    GameStatus.block = newBlock;
    GameStatus.nextBlock.shift();
    GameStatus.nextBlock.push("l"); //this lines are for test.

    // const newBlock = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter++, GameStatus.nextBlock[0]);
    // newBlock.setColor();
    // GameStatus.block = newBlock;
    // GameStatus.nextBlock.shift();
    // const rand = Math.floor(Math.random() * 7);
    // GameStatus.nextBlock.push(TetriNames[rand]);
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