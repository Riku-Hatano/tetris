import Tetris from "../../gamelogic/Tetris";
import CheckLogUser from "../../utils/CheckLogUser";

const Game = () => {
    CheckLogUser();
    return (
        <>
            <h1>game</h1>
            <Tetris />
        </>
    )
}

export default Game;