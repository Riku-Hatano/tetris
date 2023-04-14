import GameStatus from "../../status";
import BlockClass from "../../classes/BlockClass";
import { blockSetting } from "../../setting";
import { canvas } from "../../Main";

const CreateRect = () => {
    const newBlock = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter++);
    GameStatus.block = newBlock;
    canvas.fillRect(GameStatus.block.initialX, GameStatus.block.initialY, blockSetting.size, blockSetting.size);
}

export default CreateRect;