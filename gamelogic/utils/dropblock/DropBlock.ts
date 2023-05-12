import react, { SetStateAction } from "react";
import GameStatus from "../../status";
import Move from "../move/Move";
import DrawBlocks from "../drawblocks/DrawBlocks";
import { canvas } from "../../Main";

let dropBlockInterval: NodeJS.Timer = null;

//Function drop should only be called once at first time, but because of useEffect, called twice in Main.tsx.
//To avoid this, initialize variable outside of function first, and then depending on that variable, decide call it or not.
const DropBlock = (setScore: react.Dispatch<SetStateAction<number>>) => {
    const drop = () => {
        //This drop function works exactly same way as when we put on keydown.
        //Works same way as case "ArrowDown" in KeyHandler function in "../KeyHandler.ts"
        Move("down", setScore);
        GameStatus.field.flags.isPreviousDown = true;
        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block; //renew the current block. 
        canvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
        DrawBlocks();
    }
    dropBlockInterval = setInterval(drop, 1000);
}

export { dropBlockInterval } //This will be imported in "../GameOver.ts" and "../../Main.tsx"
export default DropBlock;