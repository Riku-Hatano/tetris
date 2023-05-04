import { canvas } from "../Main";
import GameStatus from "../status";

const OneBlock = (x: number, y: number, width: number, height: number, color: string) => {
    if(color === undefined) {
        canvas.fillStyle = "gray";
    } else {
        canvas.fillStyle = color;
    }
    canvas.fillRect(x, y, width, height);
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(x + 10, y);
    canvas.lineTo(x + 10, y + 10);
    canvas.lineTo(x, y + 10);
    canvas.lineTo(x, y);
    canvas.strokeStyle = "white";
    canvas.lineWidth = 1;
    canvas.stroke();
}

export default OneBlock;