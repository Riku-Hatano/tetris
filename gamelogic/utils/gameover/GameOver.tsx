import axios from "axios";
import { axiosconfig } from "../../../pages/api/lib/axios/axiosconfig";
import { dropBlockInterval } from "../dropblock/DropBlock";
import container from "../../../css/game.module.css";
import { gameOverModal } from "../../Main";
import GameStatus from "../../status";
import { handleKeyDown } from "../../Main";

const GameOver = () => {
    document.removeEventListener("keydown", handleKeyDown);
    clearInterval(dropBlockInterval);
    gameOverModal.current.classList.remove(container.hide);
    GameStatus.isOver = true;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Zero-padding for months
    const day = String(currentDate.getDate()).padStart(2, '0'); // Zero-padding for days
    const hours = String(currentDate.getHours()).padStart(2, '0'); // Zero-padding for hours
    const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Zero-padding for minutes
    const seconds = String(currentDate.getSeconds()).padStart(2, '0'); // Zero-padding for seconds
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; //Chat GPT code above.

    const scoreData = {
        score: GameStatus.score,
        playdate: formattedDate,
        gamemode: "normal",
        uid: 0,
        purpose: "send"
    }
    sessionStorage.getItem("logUser") ? scoreData.uid = JSON.parse(sessionStorage.getItem("logUser"))[0].uid : false;
    
    axios.create().post(`${axiosconfig.baseURL}api/lib/services/score`, scoreData).then(
        (res) => {
            console.log(res);
        },
        (rej) => {
            console.log(rej);
        }
    )
}

export default GameOver;