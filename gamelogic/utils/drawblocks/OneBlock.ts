import { canvas } from "../../Main";

//This function is only called by DrawBlocks.ts.
//Depending on the pixels given by DrawBlocks.ts, this function draws only one block. It means that this function will be called multiple times　when DrawBlocks.ts called once.
const OneBlock = (x: number, y: number, width: number, height: number, color: string) => {
    if(color === undefined) {
        canvas.fillStyle = "gray"; //To draw test blocks. In production environment, color === undefined shouldn't happen.
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