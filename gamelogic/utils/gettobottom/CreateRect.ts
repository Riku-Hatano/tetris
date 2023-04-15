import GameStatus from "../../status";
import BlockClass from "../../classes/BlockClass";
import { blockSetting } from "../../setting";
import Game from "../../../pages/game";

const Tetriminoes = [
    [
        [null, null, null, null],
        [null, null, null, null],
        [1, 1, 1, 1],
        [null, null, null, null]
    ],
    [
        [null, null, null, null],
        [null, 1, 1, null, null],
        [null, 1, 1, null, null],
        [null, null, null, null]
    ],   
    [
        [null, null, null, null],
        [null, null, 1, null],
        [null, 1, 1, 1],
        [null, null, null, null]
    ],
    [
        [null, null, null, null],
        [null, null, 1, 1],
        [null, 1, 1, null],
        [null, null, null, null]
    ],
    [
        [null, null, null, null],
        [null, 1, 1, null],
        [null, null, 1, 1],
        [null, null, null, null]
    ], 
    [
        [null, null, null, null],
        [null, 1, null, null],
        [null, 1, 1, 1],
        [null, null, null, null]
    ],
    [
        [null, null, null, null],
        [null, null, 1, null],
        [1, 1, 1, null],
        [null, null, null, null]
    ]
]

const TetriNames = [
    "i", "o", "t", "s", "z", "j", "l"
]


const CreateRect = () => {
    const rand = Math.floor(Math.random() * 7);
    const newBlock = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter++, "o");
    GameStatus.block = newBlock;
    console.log(GameStatus.field.field);
    switch(newBlock.shape) {
    // switch(TetriNames[rand]) {
        case "i": 
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 2] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block.id;
            break;
        case "o":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size + 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size + 1][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            break;
        case "t":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            break;
        case "s":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            break;
        case "z":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size + 1][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size + 1][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block.id;
            break;
        case "j":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            break;
        case "l":
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size ] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size][GameStatus.block.initialX / GameStatus.block.size - 1] = GameStatus.block.id;
            GameStatus.field.field[GameStatus.block.initialY / GameStatus.block.size - 1][GameStatus.block.initialX / GameStatus.block.size + 1] = GameStatus.block.id;
            break;
    }
    return newBlock;
}

export default CreateRect;