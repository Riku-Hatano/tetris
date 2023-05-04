import react, { SetStateAction } from "react";
import CreateRect from "./gettobottom/CreateRect";
import CheckRow from "./gettobottom/CheckRow";
import CalcPiles from "./gettobottom/CalcPiles";
import GameStatus from "../status";

const GetToBottom = (setScore: react.Dispatch<SetStateAction<number>>) => {
    CalcPiles();
    CheckRow(setScore);
    CreateRect();
}

export default GetToBottom;