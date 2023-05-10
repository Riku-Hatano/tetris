import { dropBlockInterval } from "../dropblock/DropBlock";
import styles from "../../../css/gameoverModal.module.css";
import container from "../../../css/game.module.css";
import { gameOverModal } from "../../Main";

const GameOver = () => {
    clearInterval(dropBlockInterval);
    gameOverModal.current.classList.remove(container.hide);
    // gameOverModal.current.classList.add(styles.show);
}

export default GameOver;