import { nextBlocks } from "../../Main";
import GameStatus from "../../status";

//This function is used at right side to show next three blocks.
const DrawNextBlocks = () => {
    let x = 20;
    let y = 20;
    if(nextBlocks !== undefined) {
        nextBlocks.clearRect(10, 10, 50, 100);
        nextBlocks.fillStyle = "black";
        nextBlocks.fillRect(10, 10, 50, 100);

        for(let i = 0 ; i < 3 ; i++) {
            switch(GameStatus.nextBlock[i]) {
                case "i":
                    nextBlocks.fillStyle = "#00ffff";
                    nextBlocks.fillRect(x - 5, y, 40, 10);
                    break;
                case "o":
                    nextBlocks.fillStyle = "#ffff00";
                    nextBlocks.fillRect(x + 5, y, 20, 20);
                    break;
                case "t":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + 10, y + 10);
                    nextBlocks.lineTo(x + 10, y);
                    nextBlocks.lineTo(x + 20, y);
                    nextBlocks.lineTo(x + 20, y + 10);
                    nextBlocks.lineTo(x + 30, y + 10);
                    nextBlocks.lineTo(x + 30, y + 20);
                    nextBlocks.lineTo(x, y + 20);
                    nextBlocks.lineTo(x, y + 10);
                    nextBlocks.lineTo(x + 10, y + 10);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#800080";
                    nextBlocks.fill();
                    break;
                case "z":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + 10, y + 10);
                    nextBlocks.lineTo(x, y + 10);
                    nextBlocks.lineTo(x, y);
                    nextBlocks.lineTo(x + 20, y);
                    nextBlocks.lineTo(x + 20, y + 10);
                    nextBlocks.lineTo(x + 30, y + 10);
                    nextBlocks.lineTo(x + 30, y + 20);
                    nextBlocks.lineTo(x + 10, y + 20);
                    nextBlocks.lineTo(x + 10, y + 10);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#ff0000";
                    nextBlocks.fill();
                    break;
                case "s":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + 10, y + 10);
                    nextBlocks.lineTo(x + 10, y);
                    nextBlocks.lineTo(x + 30, y);
                    nextBlocks.lineTo(x + 30, y + 10);
                    nextBlocks.lineTo(x + 20, y + 10);
                    nextBlocks.lineTo(x + 20, y + 20);
                    nextBlocks.lineTo(x, y + 20);
                    nextBlocks.lineTo(x, y + 10);
                    nextBlocks.lineTo(x + 10, y + 10);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#00ff00";
                    nextBlocks.fill();
                    break;
                case "j":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + 10, y + 10);
                    nextBlocks.lineTo(x + 30, y + 10);
                    nextBlocks.lineTo(x + 30, y + 20);
                    nextBlocks.lineTo(x, y + 20);
                    nextBlocks.lineTo(x, y);
                    nextBlocks.lineTo(x + 10, y);
                    nextBlocks.lineTo(x + 10, y + 10);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#0000ff";
                    nextBlocks.fill();
                    break;
                case "l":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + 10, y + 10);
                    nextBlocks.lineTo(x + 20, y + 10);
                    nextBlocks.lineTo(x + 20, y);
                    nextBlocks.lineTo(x + 30, y);
                    nextBlocks.lineTo(x + 30, y + 20);
                    nextBlocks.lineTo(x, y + 20);
                    nextBlocks.lineTo(x, y + 10);
                    nextBlocks.lineTo(x + 10, y + 10);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#ff7f00";
                    nextBlocks.fill();
                    break;
            }
            y += 30; //Not to overwrite same place, move to down.
        }
    }
}

export default DrawNextBlocks;