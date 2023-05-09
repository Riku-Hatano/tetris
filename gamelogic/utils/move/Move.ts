import react, { SetStateAction } from "react";
import GameStatus from "../../status";
import canMoveDown from "./movechecker/canMoveDown";
import canMoveLeft from "./movechecker/canMoveLeft";
import canMoveRight from "./movechecker/canMoveRight";
import GetToBottom from "../gettobottom/GetToBottom";
import ChangeField from "../changefield/ChangeField";
import DeletePrevouisBlock from "../changefield/DeletePreviousBlock";
import { Setting } from "../../setting";

const Move = (direction: string, setScore: react.Dispatch<SetStateAction<number>> = null) => {
    switch(direction) {
        case "right":
            canMoveRight() ? ChangeField(Setting.block.size, 0) : console.log("failed to move right");
            break;
        case "left":
            canMoveLeft() ? ChangeField(-Setting.block.size, 0) : console.log("failed to move left");
            break;
        case "down":
            if(canMoveDown()) {
                ChangeField(0, Setting.block.size);
            } else {
                if(GameStatus.field.flags.isPreviousDown) {
                    DeletePrevouisBlock();
                }
                ChangeField(0, 0, false, false);
                GetToBottom(setScore);
            }
            break;
    }
}

export default Move;