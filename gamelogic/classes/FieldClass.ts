import { blockSetting } from "../setting";

class FieldClass {
    width: number;
    height: number;
    widthBlock: number;
    heightBlock: number;
    field: any[];
    flags: {
        twoBlocks: boolean,
    }
    constructor(width: number, height: number) {
        this.width = width,
        this.height = height,
        this.widthBlock = Math.floor(this.width / blockSetting.size);
        this.heightBlock = Math.floor(this.height / blockSetting.size);
        this.field = this.initializeField();
        this.flags = {
            twoBlocks: false,
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
                twoBlocks: this.flags.twoBlocks
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
        [null, null, null, "aa", "aa", null, null, null, null, null],
        [null, null, null, "aa", null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, "aa", null, null, "aa", null, null, null, null],
        [null, null, "aa", "aa", null, null, null, "aa", null, null],
        [null, null, "aa", null, null, null, null, "aa", null, null],
        [null, null, null, null, null, null, null, "aa", null, null],
        [null, null, null, null, null, null, null, "aa", null, null],
        [null, null, null, null, null, null, "aa", null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, "aa", null, null, null, "aa", null, null, null],
        [null, null, "aa", null, null, null, null, null, null, null],
        [null, null, "aa", null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        ["aa", null, null, null, null, null, null, null, null, null],
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