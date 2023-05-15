interface GS {
    block: {
        size: number,
        initialX: number,
        initialY: number,
        positionX: number,
        positionY: number,
        id: number,
        isFixed: boolean,
        shape: string,
        rotateStatus: number,
        color: string,
    }
    field: {
        width: number,
        height: number,
        widthBlock: number,
        heightBlock: number,
        flags: {
            twoBlocks: boolean,
            isPreviousDown: boolean,
            isScored: boolean,
        },
        field: any[][],
        calcPiles: Function,
    }
    blockCounter: number,
    score: number,
    nextBlock: string[],
    isOver: boolean,
    dropSpeed: number,
}

//GameStatus is called at many place. To change the GameStatus and DrawBlocks, what we see will be chanbged.
const GameStatus: GS = {
    block: {
        size: 0, //Size of blocks(px)
        initialX: 0, //Where for new block to be created in X axis(px)
        initialY: 0, //Where for new block to be created in Y axis(px)
        positionX: 0, //Current X position of block(px)
        positionY: 0, //Current Y position of block(px)
        id: 0, //Index number of block. I
        isFixed: false, //If current block is movable
        shape: "", //Shape of block. Shape should be i, o, t, s, z, j, or l.
        rotateStatus: 0, //Define how block is rotated now. there are four status. 0:0deg(360deg), 1:90deg, 2:180deg, 3:270deg
        color: "", //Defing color depending on GameStatus.block.shape.
    },
    field: {
        width: 0, //The size of field's widgh(px)
        height: 0, //The size of field's height(px)
        widthBlock: 0, //Define how many blocks there are in X axis(GameStatus.field.width / GameStatus.block.size)
        heightBlock: 0, //Define how many blocks there are in Y axis(GameStatus.field.height / GameStatus.block.size)
        flags: {
            twoBlocks: false, //This flag is used in switch{case "i"} in "./utils/rotate/rotatechecker/srs/KickFloor.ts", KickLeftWall.ts, and KickRightWall.ts to check i mino kick wall and floor for two blocks.
            isPreviousDown: false, //This flag is used to check the last key use push was ArrowDown or not. This is used to define block was moved in from right and left, or vertically stacked.
            isScored: false,
        },
        field: [[]], //Define field of Tetris. This is initialize initializeField method in "./classes/FielsClass.ts"
        calcPiles: undefined, //This is not used.
    },
    blockCounter: 0, //Works same way as id.
    score: 0,
    nextBlock: [], //This will contain next three blocks which is chosen from i, o, t, s, z, j, or l.
    isOver: false,
    dropSpeed: 1000
}

export default GameStatus