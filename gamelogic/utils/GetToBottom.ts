import CreateRect from "./gettobottom/CreateRect";
import CheckRow from "./gettobottom/CheckRow";
import AddBlock from "./gettobottom/AddBlock";
import GameStatus from "../status";

const GetToBottom = () => {
    // GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.blockCounter;
    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.blockCounter;
    AddBlock();
    CreateRect();
    CheckRow();
    console.log(GameStatus.field.calcPiles());
}

export default GetToBottom;