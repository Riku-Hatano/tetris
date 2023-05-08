import { dropBlockInterval } from "../dropblock/DropBlock";

const GameOver = () => {
    clearInterval(dropBlockInterval);
    alert("gameover");
}

export default GameOver;