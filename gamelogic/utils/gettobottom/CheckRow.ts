import GameStatus from "../../status";
import DrawBlocks from "../DrawBlocks";

const CheckRow = () => {
    const field = GameStatus.field.field;
    const flags = [];
    for(let i = 0 ; i < GameStatus.field.field.length ; i++) {
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
        }
        flags.push(flag);
    }
    GameStatus.score += 10;
    console.log(GameStatus);
    return flags;
}

export default CheckRow;