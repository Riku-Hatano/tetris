import react, { SetStateAction } from "react";
import GameStatus from "../../status";
import canMoveDown from "./movechecker/canMoveDown";
import canMoveLeft from "./movechecker/canMoveLeft";
import canMoveRight from "./movechecker/canMoveRight";
import GetToBottom from "../gettobottom/GetToBottom";
import { speedSetting } from "../../setting";
import ChangeField from "../changefield/ChangeField";
import DeletePrevouisBlock from "../changefield/DeletePreviousBlock";

const Move = (direction: string, setScore: react.Dispatch<SetStateAction<number>> = null) => {
    switch(direction) {
        case "right":
            canMoveRight() ? ChangeField(10, 0) : console.log("failed to move right");
            break;
        case "left":
            canMoveLeft() ? ChangeField(-10, 0) : console.log("failed to move left");
            break;
        case "down":
            if(canMoveDown()) {
                ChangeField(0, 10);
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