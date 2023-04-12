class BlockClass {
    size: number;
    initialX: number;
    initialY: number;
    positionX: number;
    positionY: number;
    id: number;
    isFixed: boolean;
    constructor(size: number, initialX: number, initialY: number) {
        this.size = size,
        this.initialX = initialX,
        this.initialY = initialY,
        this.positionX = initialX,
        this.positionY = initialY,
        this.id = this.id++
        this.isFixed = false
    }
    returnAll() {
        return {
            size: this.size,
            initialX: this.initialX,
            initialY: this.initialY,
            positionX: this.positionX,
            positionY: this.positionY,
            id: this.id,
            isFixed: this.isFixed
        }
    }
    move(direction: string) {
        switch(direction) {
            case "right":
                this.positionX += 10;
                break;
            case "left":
                this.positionX -= 10;
                break;
            case "down":
                this.positionY += 10;
                break;
            case "up":
                this.positionY -= 10;
                break;
            default: 
                alert("illegal direction, please checkout typo!");
        }
    }
}

export default BlockClass;