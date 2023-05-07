import react, { SetStateAction } from "react";
import GameStatus from "../../status";
import DrawBlocks from "../DrawBlocks";

const CheckRow = (setScore: react.Dispatch<SetStateAction<number>>) => {
    const field = 20
    const flags = [];
    let flagCounter = 0;
    for(let i = 0 ; i < field ; i++) {
        let flag = true;
        for(let cell of GameStatus.field.field[i]) {
            if(cell === null) {
                flag = false;
                break;
            }
        }
        if(flag === true) {
            GameStatus.field.field.splice(i, 1);
            GameStatus.field.field.unshift([null, null, null, null, null, null, null, null, null, null]);
            console.log(GameStatus.field.field);
            DrawBlocks();
            flagCounter++;
            GameStatus.score += 10;
            setScore(GameStatus.score);
        }
        flags.push(flag);
    }
    console.log(flags);
    console.log(flagCounter)
    return flagCounter;
}

export default CheckRow;