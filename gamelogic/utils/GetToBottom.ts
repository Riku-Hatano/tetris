import CreateRect from "./gettobottom/CreateRect";
import CheckRow from "./gettobottom/CheckRow";
import CalcPiles from "./gettobottom/CalcPiles";
import GameStatus from "../status";

const GetToBottom = () => {
    CalcPiles();
    CheckRow();
    CreateRect();
}

export default GetToBottom;