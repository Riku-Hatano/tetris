import GameStatus from "../../status";
import BlockClass from "../../classes/BlockClass";
import { blockSetting } from "../../setting";
import { canvas } from "../../Main";
import OneBlock from "../OneBlock";

const CreateRect = () => {
    const newBlock = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter++);
    GameStatus.block = newBlock;
    // canvas.fillRect(GameStatus.block.initialX, GameStatus.block.initialY, blockSetting.size, blockSetting.size);
    // OneBlock(GameStatus.block.initialX, GameStatus.block.initialY, blockSetting.size, blockSetting.size);
}

export default CreateRect;