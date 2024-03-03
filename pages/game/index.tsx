import Tetris from "../../gamelogic/Tetris";
import CheckLogUser from "../../utils/CheckLogUser";

const Game = () => {
  CheckLogUser();
  return (
    <>
      <Tetris />
    </>
  );
};

export default Game;
