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
    }
    field: {
        width: number,
        height: number,
        widthBlock: number,
        heightBlock: number,
        flags: {
            twoBlocks: boolean
        },
        field: number[][],
        calcPiles: Function,
    }
    blockCounter: number,
}

const GameStatus: GS = {
    block: {
        size: 0,
        initialX: 0,
        initialY: 0,
        positionX: 0,
        positionY: 0,
        id: 0,
        isFixed: false,
        shape: "",
        rotateStatus: 0,
    },
    field: {
        width: 0,
        height: 0,
        widthBlock: 0,
        heightBlock: 0,
        flags: {
            twoBlocks: false,
        },
        field: [[]],
        calcPiles: undefined,
    },
    blockCounter: 0
}

export default GameStatus