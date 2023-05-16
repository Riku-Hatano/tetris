import next from "next/types";
import { nextBlocks } from "../../Main";
import { Setting } from "../../setting";
import GameStatus from "../../status";

//This function is used at right side to show next three blocks.　//この関数は右側のモーダルにある、次に落ちてくるブロックを表示するための関数です。
const DrawNextBlocks = () => {
    let x = Setting.block.size * 1.75;
    let y = Setting.block.size;
    let size = Setting.block.size;
    if(nextBlocks !== undefined) {
        nextBlocks.clearRect(size / 2, size / 2, size * 4.25, size * 7);
        nextBlocks.fillStyle = "black";
        nextBlocks.fillRect(size / 2, size / 2, size * 4.25, size * 7);

        for(let i = 0 ; i < 3 ; i++) {
            switch(GameStatus.nextBlock[i]) {
                case "i":
                    nextBlocks.fillStyle = "#00ffff";
                    nextBlocks.fillRect(x - size / 4, y, size * 2, size / 2);

                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x / 1.75 + size / 2, y);
                    nextBlocks.lineTo(x * 2, y);
                    nextBlocks.lineTo(x * 2, y + size / 2);
                    nextBlocks.lineTo(x / 1.75 + size / 2, y + size / 2);
                    nextBlocks.lineTo(x / 1.75 + size / 2, y);
                    nextBlocks.moveTo(x / 1.75 + size / 2 + size / 2, y);
                    nextBlocks.lineTo(x / 1.75 + size / 2 + size / 2, y + size / 2);
                    nextBlocks.moveTo(x / 1.75 + size / 2 + size, y);
                    nextBlocks.lineTo(x / 1.75 + size / 2 + size, y + size / 2);
                    nextBlocks.moveTo(x / 1.75 + size / 2 + size * 1.5, y);
                    nextBlocks.lineTo(x / 1.75 + size / 2 + size * 1.5, y + size / 2);
                    nextBlocks.strokeStyle = "white";
                    nextBlocks.lineWidth = Setting.block.size / 14;
                    nextBlocks.stroke();
                    break;
                case "o":
                    nextBlocks.fillStyle = "#ffff00";
                    nextBlocks.fillRect(x + size / 4, y, size, size);
                    nextBlocks.moveTo(x + size / 4, y);
                    nextBlocks.lineTo(x + size / 4, y + size);
                    nextBlocks.lineTo(x + size + size / 4, y + size);
                    nextBlocks.lineTo(x + size + size / 4, y);
                    nextBlocks.lineTo(x + size / 4, y);
                    nextBlocks.moveTo(x + size / 4, y + size / 2);
                    nextBlocks.lineTo(x + size + size / 4, y + size / 2);
                    nextBlocks.moveTo(x + size * 0.75, y);
                    nextBlocks.lineTo(x + size * 0.75, y + size);
                    nextBlocks.strokeStyle = "white";
                    nextBlocks.lineWidth = Setting.block.size / 14;
                    nextBlocks.stroke();
                    break;
                case "t":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y);
                    nextBlocks.lineTo(x + size, y);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#800080";
                    nextBlocks.fill();

                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y);
                    nextBlocks.lineTo(x + size, y);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size);
                    nextBlocks.moveTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size);
                    nextBlocks.strokeStyle = "white";
                    nextBlocks.lineWidth = Setting.block.size / 14;
                    nextBlocks.stroke();
                    break;
                case "s":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y);
                    nextBlocks.lineTo(x + size * 1.5, y);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#00ff00";
                    nextBlocks.fill();

                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y);
                    nextBlocks.lineTo(x + size * 1.5, y);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.moveTo(x + size, y);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size);
                    nextBlocks.strokeStyle = "white";
                    nextBlocks.lineWidth = Setting.block.size / 14;
                    nextBlocks.stroke();
                    break;
                case "z":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x, y);
                    nextBlocks.lineTo(x + size, y);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x + size / 2, y + size);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#ff0000";
                    nextBlocks.fill();

                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x, y);
                    nextBlocks.lineTo(x + size, y);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x + size / 2, y + size);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);

                    nextBlocks.moveTo(x + size / 2, y);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size);
                    nextBlocks.strokeStyle = "white";
                    nextBlocks.lineWidth = Setting.block.size / 14;
                    nextBlocks.stroke();
                    break;
                case "j":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y);
                    nextBlocks.lineTo(x + size / 2, y);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#0000ff";
                    nextBlocks.fill();

                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y);
                    nextBlocks.lineTo(x + size / 2, y);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.moveTo(x, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size);
                    nextBlocks.moveTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size);
                    nextBlocks.strokeStyle = "white";
                    nextBlocks.lineWidth = Setting.block.size / 14;
                    nextBlocks.stroke();
                    break;
                case "l":
                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y);
                    nextBlocks.lineTo(x + size * 1.5, y);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);
                    nextBlocks.closePath();
                    nextBlocks.fillStyle = "#ff7f00";
                    nextBlocks.fill();

                    nextBlocks.beginPath();
                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y);
                    nextBlocks.lineTo(x + size * 1.5, y);
                    nextBlocks.lineTo(x + size * 1.5, y + size);
                    nextBlocks.lineTo(x, y + size);
                    nextBlocks.lineTo(x, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size / 2);

                    nextBlocks.moveTo(x + size / 2, y + size / 2);
                    nextBlocks.lineTo(x + size / 2, y + size);
                    nextBlocks.moveTo(x + size * 1.5, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size / 2);
                    nextBlocks.lineTo(x + size, y + size);

                    nextBlocks.strokeStyle = "white";
                    nextBlocks.lineWidth = Setting.block.size / 14;
                    nextBlocks.stroke();
                    break;
            }
            y += Setting.block.size * 2;
        }
    }
}

export default DrawNextBlocks;