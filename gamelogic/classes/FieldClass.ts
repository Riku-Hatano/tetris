import { blockSetting } from "../setting";

class FieldClass {
    width: number;
    height: number;
    widthBlock: number;
    heightBlock: number;
    field: any[]
    constructor(width: number, height: number) {
        this.width = width,
        this.height = height,
        this.widthBlock = Math.floor(this.width / blockSetting.size);
        this.heightBlock = Math.floor(this.height / blockSetting.size);
        this.field = this.initializeField();
    }
    returnAll() {
        return {
            width: this.width,
            height: this.height,
            widthBlock: this.widthBlock,
            heightBlock: this.heightBlock,
            field: this.field
        }
    }
    initializeField(): any {
        let returnField = new Array();
        for(let i = 0 ; i < this.heightBlock ; i++) {
            let row = new Array();
            for(let j = 0 ; j < this.widthBlock ; j++) {
                row.push(null);
            }
            returnField.push(row);
        }
        return returnField;
    }
}

export default FieldClass;