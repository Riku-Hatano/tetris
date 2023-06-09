import { nextBlocksCanvas } from "../../Main";
import { Setting } from "../../setting";
import GameStatus from "../../status";

//This function is used at right side to show next three blocks.　//この関数は右側のモーダルにある、次に落ちてくるブロックを表示するための関数です。
const DrawNextBlocks = () => {
    let x = Setting.block.size * 1.75;
    let y = Setting.block.size;
    let size = Setting.block.size;
    if(nextBlocksCanvas !== undefined) {
        nextBlocksCanvas.clearRect(size / 2, size / 2, size * 4.25, size * 7);
        nextBlocksCanvas.fillStyle = "black";
        nextBlocksCanvas.fillRect(size / 2, size / 2, size * 4.25, size * 7);

        for(let i = 0 ; i < 3 ; i++) {
            switch(GameStatus.nextBlock[i]) {
                case "i":
                    nextBlocksCanvas.fillStyle = "#00ffff";
                    nextBlocksCanvas.fillRect(x - size / 4, y, size * 2, size / 2);

                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x / 1.75 + size / 2, y);
                    nextBlocksCanvas.lineTo(x * 2, y);
                    nextBlocksCanvas.lineTo(x * 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x / 1.75 + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x / 1.75 + size / 2, y);
                    nextBlocksCanvas.moveTo(x / 1.75 + size / 2 + size / 2, y);
                    nextBlocksCanvas.lineTo(x / 1.75 + size / 2 + size / 2, y + size / 2);
                    nextBlocksCanvas.moveTo(x / 1.75 + size / 2 + size, y);
                    nextBlocksCanvas.lineTo(x / 1.75 + size / 2 + size, y + size / 2);
                    nextBlocksCanvas.moveTo(x / 1.75 + size / 2 + size * 1.5, y);
                    nextBlocksCanvas.lineTo(x / 1.75 + size / 2 + size * 1.5, y + size / 2);
                    nextBlocksCanvas.strokeStyle = "white";
                    nextBlocksCanvas.lineWidth = Setting.block.size / 14;
                    nextBlocksCanvas.stroke();
                    break;
                case "o":
                    nextBlocksCanvas.fillStyle = "#ffff00";
                    nextBlocksCanvas.fillRect(x + size / 4, y, size, size);
                    nextBlocksCanvas.moveTo(x + size / 4, y);
                    nextBlocksCanvas.lineTo(x + size / 4, y + size);
                    nextBlocksCanvas.lineTo(x + size + size / 4, y + size);
                    nextBlocksCanvas.lineTo(x + size + size / 4, y);
                    nextBlocksCanvas.lineTo(x + size / 4, y);
                    nextBlocksCanvas.moveTo(x + size / 4, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size + size / 4, y + size / 2);
                    nextBlocksCanvas.moveTo(x + size * 0.75, y);
                    nextBlocksCanvas.lineTo(x + size * 0.75, y + size);
                    nextBlocksCanvas.strokeStyle = "white";
                    nextBlocksCanvas.lineWidth = Setting.block.size / 14;
                    nextBlocksCanvas.stroke();
                    break;
                case "t":
                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y);
                    nextBlocksCanvas.lineTo(x + size, y);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.closePath();
                    nextBlocksCanvas.fillStyle = "#800080";
                    nextBlocksCanvas.fill();

                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y);
                    nextBlocksCanvas.lineTo(x + size, y);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size);
                    nextBlocksCanvas.moveTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size);
                    nextBlocksCanvas.strokeStyle = "white";
                    nextBlocksCanvas.lineWidth = Setting.block.size / 14;
                    nextBlocksCanvas.stroke();
                    break;
                case "s":
                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.closePath();
                    nextBlocksCanvas.fillStyle = "#00ff00";
                    nextBlocksCanvas.fill();

                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.moveTo(x + size, y);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size);
                    nextBlocksCanvas.strokeStyle = "white";
                    nextBlocksCanvas.lineWidth = Setting.block.size / 14;
                    nextBlocksCanvas.stroke();
                    break;
                case "z":
                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x, y);
                    nextBlocksCanvas.lineTo(x + size, y);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.closePath();
                    nextBlocksCanvas.fillStyle = "#ff0000";
                    nextBlocksCanvas.fill();

                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x, y);
                    nextBlocksCanvas.lineTo(x + size, y);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);

                    nextBlocksCanvas.moveTo(x + size / 2, y);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size);
                    nextBlocksCanvas.strokeStyle = "white";
                    nextBlocksCanvas.lineWidth = Setting.block.size / 14;
                    nextBlocksCanvas.stroke();
                    break;
                case "j":
                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y);
                    nextBlocksCanvas.lineTo(x + size / 2, y);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.closePath();
                    nextBlocksCanvas.fillStyle = "#0000ff";
                    nextBlocksCanvas.fill();

                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y);
                    nextBlocksCanvas.lineTo(x + size / 2, y);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.moveTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size);
                    nextBlocksCanvas.moveTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size);
                    nextBlocksCanvas.strokeStyle = "white";
                    nextBlocksCanvas.lineWidth = Setting.block.size / 14;
                    nextBlocksCanvas.stroke();
                    break;
                case "l":
                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.closePath();
                    nextBlocksCanvas.fillStyle = "#ff7f00";
                    nextBlocksCanvas.fill();

                    nextBlocksCanvas.beginPath();
                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y);
                    nextBlocksCanvas.lineTo(x + size * 1.5, y + size);
                    nextBlocksCanvas.lineTo(x, y + size);
                    nextBlocksCanvas.lineTo(x, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size / 2);

                    nextBlocksCanvas.moveTo(x + size / 2, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size / 2, y + size);
                    nextBlocksCanvas.moveTo(x + size * 1.5, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size / 2);
                    nextBlocksCanvas.lineTo(x + size, y + size);

                    nextBlocksCanvas.strokeStyle = "white";
                    nextBlocksCanvas.lineWidth = Setting.block.size / 14;
                    nextBlocksCanvas.stroke();
                    break;
            }
            y += Setting.block.size * 2;
        }
    }
}

export default DrawNextBlocks;