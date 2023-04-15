import GameStatus from "../../status";
import BlockClass from "../../classes/BlockClass";
import { blockSetting } from "../../setting";

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
    const newBlock = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter++, TetriNames[rand]);
    GameStatus.block = newBlock;
    console.log(GameStatus.block);
}

export default CreateRect;