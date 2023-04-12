import Tetris from "../../gamelogic/Tetris";
import CheckLogUser from "../../utils/CheckLogUser";

const Game = () => {
    CheckLogUser();
    return (
        <>
            <p>game</p>
            <Tetris />
        </>
    )
}

export default Game;