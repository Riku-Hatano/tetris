import react from "react";
import GameStatus from "../status";
import { tetrisFieldCanvas } from "../Main";
import DrawBlocks from "./drawblocks/DrawBlocks";
import Rotate from "./rotate/Rotate";
import Move from "./move/Move";

const KeyHandler = (e: any, setScore: react.Dispatch<react.SetStateAction<number>>) => {
    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous block
    switch(e.key) {
        case "ArrowRight":
            Move("right", setScore);
            GameStatus.field.flags.isPreviousDown = false;
            break;
        case "ArrowLeft":
            Move("left", setScore);
            GameStatus.field.flags.isPreviousDown = false;
            break;
        case "ArrowDown":
            Move("down", setScore);
            GameStatus.field.flags.isPreviousDown = true;
            break;
        case "ArrowUp":
            Rotate();
            GameStatus.field.flags.isPreviousDown = false;
            break;
        case "w":
            console.log("w was click");
            break;
        default:
            console.log(e.key);
            break;
    }
    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block; //renew the current block. 
    tetrisFieldCanvas.clearRect(0, 0, GameStatus.field.width, GameStatus.field.height);
    DrawBlocks(); //draw all of tetrimino exept for current one
}

export default KeyHandler;