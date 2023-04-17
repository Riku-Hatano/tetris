class BlockClass {
    size: number;
    initialX: number;
    initialY: number;
    positionX: number;
    positionY: number;
    id: number;
    isFixed: boolean;
    shape: string;
    rotateStatus: number
    constructor(size: number, initialX: number, initialY: number, id: number, shape: string) {
        this.size = size,
        this.initialX = initialX,
        this.initialY = initialY,
        this.positionX = initialX,
        this.positionY = initialY,
        this.id = id,
        this.isFixed = false,
        this.shape = shape,
        this.rotateStatus = 0
    }
    returnAll() {
        return {
            size: this.size,
            initialX: this.initialX,
            initialY: this.initialY,
            positionX: this.positionX,
            positionY: this.positionY,
            id: this.id,
            isFixed: this.isFixed,
            shape: this.shape,
            rotateStatus: this.rotateStatus
        }
    }
}

export default BlockClass;