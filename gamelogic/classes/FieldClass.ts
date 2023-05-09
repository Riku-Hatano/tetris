import { Setting } from "../setting";

class FieldClass {
    width: number;
    height: number;
    widthBlock: number;
    heightBlock: number;
    field: any[];
    flags: {
        twoBlocks: boolean,
        isPreviousDowdn: boolean,
    }
    constructor(width: number, height: number) {
        this.width = width,
        this.height = height,
        this.widthBlock = Math.floor(this.width / Setting.block.size);
        this.heightBlock = Math.floor(this.height / Setting.block.size);
        this.field = this.initializeField();
        this.flags = {
            twoBlocks: false,
            isPreviousDowdn: false,
        }
    }
      
    returnAll() {
        return {
            width: this.width,
            height: this.height,
            widthBlock: this.widthBlock,
            heightBlock: this.heightBlock,
            field: this.field,
            calcPiles: this.calcPiles,
            flags: {
                twoBlocks: this.flags.twoBlocks,
                isPreviousDown: this.flags.isPreviousDowdn,
            }
        }
    }
    initializeField(): any {
        let returnField = new Array();
        // for(let i = 0 ; i < this.heightBlock ; i++) {
        //     let row = new Array();
        //     for(let j = 0 ; j < this.widthBlock ; j++) {
        //         row.push(null);
        //     }
        //     returnField.push(row);
        // } //this can be initialized depending on the size of block

        returnField =[
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"],
        ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"],
        ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"],
        ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"]
        ]
        return returnField;
    }
    calcPiles() {
        const piles = [];
        for(let i = 0 ; i < this.widthBlock ; i++) {
            piles.push(0);
        }
        for(let row of this.field) {
            for(let i = 0 ; i < row.length ; i++) {
                if(row[i] !== null) {
                    piles[i]++;
                }
            }
        }
        return piles;
    }
}

export default FieldClass;