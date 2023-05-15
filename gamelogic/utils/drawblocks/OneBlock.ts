import { tetrisFieldCanvas } from "../../Main";
import { Setting } from "../../setting";

//This function is only called by DrawBlocks.ts.
//Depending on the pixels given by DrawBlocks.ts, this function draws only one block. It means that this function will be called multiple times　when DrawBlocks.ts called once.
const OneBlock = (x: number, y: number, width: number, height: number, color: string) => {
    if(color === undefined) {
        tetrisFieldCanvas.fillStyle = "gray"; //To draw test blocks. In production environment, color === undefined shouldn't happen.
    } else {
        tetrisFieldCanvas.fillStyle = color;
    }
    tetrisFieldCanvas.fillRect(x, y, width, height);
    tetrisFieldCanvas.beginPath();
    tetrisFieldCanvas.moveTo(x, y);
    tetrisFieldCanvas.lineTo(x + Setting.block.size, y);
    tetrisFieldCanvas.lineTo(x + Setting.block.size, y + Setting.block.size);
    tetrisFieldCanvas.lineTo(x, y + Setting.block.size);
    tetrisFieldCanvas.lineTo(x, y);
    tetrisFieldCanvas.strokeStyle = "white";
    tetrisFieldCanvas.lineWidth = Setting.block.size / 10;
    tetrisFieldCanvas.stroke();
}

export default OneBlock;