import { canvas } from "../Main";

const OneBlock = (x: number, y: number, width: number, height: number) => {
    canvas.fillRect(x, y, width, height);
    canvas.beginPath();
    canvas.moveTo(x + 2, y + 2);
    canvas.lineTo(x + 8, y + 2);
    canvas.lineTo(x + 8, y + 8);
    canvas.lineTo(x + 2, y + 8);
    canvas.lineTo(x + 2, y + 2);
    canvas.strokeStyle = "white";
    canvas.lineWidth = 2;
    canvas.stroke();
}

export default OneBlock;