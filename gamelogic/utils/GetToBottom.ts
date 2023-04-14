import CreateRect from "./gettobottom/CreateRect";
import CheckRow from "./gettobottom/CheckRow";
import AddBlock from "./gettobottom/AddBlock";
import CalcPiles from "./gettobottom/CalcPiles";

const GetToBottom = () => {
    CalcPiles();
    AddBlock();
    CreateRect();
    CheckRow();
}

export default GetToBottom;