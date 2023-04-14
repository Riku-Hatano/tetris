import GameStatus from "../../status";

const CalcPiles = () => { //return how many blocks are stacked at each column.
    const piles = [];
        for(let i = 0 ; i < GameStatus.field.widthBlock ; i++) {
            piles.push(0);
        }
        for(let row of GameStatus.field.field) {
            for(let i = 0 ; i < row.length ; i++) {
                if(row[i] !== null) {
                    piles[i]++;
                }
            }
        }
    return piles; //return value will be like [2, 0, 0, 4, 5] 
}

export default CalcPiles;