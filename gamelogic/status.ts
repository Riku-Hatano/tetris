interface GS {
    block: {
        size: number,
        initialX: number,
        initialY: number,
        positionX: number,
        positionY: number,
        id: number,
        isFixed: boolean
    }
    field: {
        width: number,
        height: number,
        widthBlock: number,
        heightBlock: number,
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
    },
    field: {
        width: 0,
        height: 0,
        widthBlock: 0,
        heightBlock: 0,
        field: [[]],
        calcPiles: undefined,
    },
    blockCounter: 0
}

export default GameStatus