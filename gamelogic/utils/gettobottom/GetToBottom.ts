import react, { SetStateAction } from "react";
import CreateRect from "./CreateRect";
import CheckRow from "./CheckRow";

const GetToBottom = (setScore: react.Dispatch<SetStateAction<number>>) => {
    CheckRow(setScore);
    CreateRect();
}

export default GetToBottom;