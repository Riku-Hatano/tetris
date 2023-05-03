class BlockClass {
    size: number;
    initialX: number;
    initialY: number;
    positionX: number;
    positionY: number;
    id: number;
    isFixed: boolean;
    shape: string;
    rotateStatus: number;
    color: string;
    constructor(size: number, initialX: number, initialY: number, id: number, shape: string) {
        this.size = size,
        this.initialX = initialX,
        this.initialY = initialY,
        this.positionX = initialX,
        this.positionY = initialY,
        this.id = id,
        this.isFixed = false,
        this.shape = shape,
        this.rotateStatus = 0,
        this.color = ""
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
            rotateStatus: this.rotateStatus,
            color: this.color,
        }
    }
    setColor() {
        switch(this.shape) {
            case "i":
                this.color = "#00ffff";
                break;
            case "o":
                this.color = "#ffff00";
                break;
            case "t":
                this.color = "#800080";
                break;
            case "s":
                this.color = "#00ff00";
                break;
            case "z":
                this.color = "#ff0000";
                break;
            case "j":
                this.color = "#0000ff";
                break;
            case "l":
                this.color = "#ff7f00";
                break;
        }
    }
}

export default BlockClass;