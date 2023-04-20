import CreateRect from "./gettobottom/CreateRect";
import CheckRow from "./gettobottom/CheckRow";
import CalcPiles from "./gettobottom/CalcPiles";

const GetToBottom = () => {
    CalcPiles();
    CheckRow();
    CreateRect();
}

export default GetToBottom;