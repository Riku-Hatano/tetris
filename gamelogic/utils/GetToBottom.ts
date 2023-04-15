import CreateRect from "./gettobottom/CreateRect";
import CheckRow from "./gettobottom/CheckRow";
import AddBlock from "./gettobottom/AddBlock";
import CalcPiles from "./gettobottom/CalcPiles";
import GameStatus from "../status";

const GetToBottom = () => {
    CalcPiles();
    AddBlock();
    CreateRect();
    CheckRow();
    console.log(GameStatus.field.field);
}

export default GetToBottom;