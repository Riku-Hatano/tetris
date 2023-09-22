import react, { SetStateAction } from "react";
import GameStatus from "../../status";
import { Setting } from "../../setting";
import DrawBlocks from "../drawblocks/DrawBlocks";

const CheckRow = (setScore: react.Dispatch<SetStateAction<number>>) => {
    const field = 20
    const flags = [];
    let deleteHowManyLines = 0;
    for(let i = 0 ; i < field ; i++) {
        let flag = true;
        for(let cell of GameStatus.field.field[i]) {
            if(cell === null) {
                flag = false;
                break;
            }
        }
        if(flag === true) { //inside of this condition is when one more line are deleted. //この条件分岐の中にテトリスの列が消された時に起こることが書かれています。
            GameStatus.field.field.splice(i, 1);
            GameStatus.field.field.unshift([null, null, null, null, null, null, null, null, null, null]);
            DrawBlocks();
            deleteHowManyLines++;
            GameStatus.field.flags.isScored = true;
            GameStatus.score += 10;
            setScore(GameStatus.score);
        }
        flags.push(flag);
    }
    return deleteHowManyLines; //this return value are not used anywhere. //この返り値はどこでも使われません。
}

export default CheckRow;