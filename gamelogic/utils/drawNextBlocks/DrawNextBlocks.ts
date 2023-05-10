import { nextBlocks } from "../../Main";
import { Setting } from "../../setting";
import GameStatus from "../../status";

//This function is used at right side to show next three blocks.
const DrawNextBlocks = () => {
    // let x = 20;
    // let y = 20;
    let x = Setting.block.size * 1.75;
    let y = Setting.block.size
    if(nextBlocks !== undefined) {
        nextBlocks.clearRect(10, 10, 85, 140);
        nextBlocks.fillStyle = "black";
        nextBlocks.fillRect(10, 10, 85, 140);
        // nextBlocks.clearRect(0, 0, 1000, 2000);
        // nextBlocks.fillStyle = "black";
        // nextBlocks.fillRect(0, 0, 1000, 2000);

        for(let i = 0 ; i < 3 ; i++) {
            switch(GameStatus.nextBlock[i]) {
                case "i":
                    nextBlocks.fillStyle = "#00ffff";
                    nextBlocks.fillRect(x - 5, y, 40, 10);
                    // nextBlocks.fillRect(x - Setting.block.size / 2, y, Setting.block.size * 4, Setting.block.size);
                    break;
                case "o":
                    nextBlocks.fillStyle = "#ffff00";
                    nextBlocks.fillRect(x + 5, y, 20, 20);
                    // nextBlocks.fillRect(x + Setting.block.size / 2, y, Setting.block.size * 2, Setting.block.size * 2);
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
            // y += 30; //Not to overwrite same place, move to down.
            y += Setting.block.size * 2;
        }
    }
}

export default DrawNextBlocks;