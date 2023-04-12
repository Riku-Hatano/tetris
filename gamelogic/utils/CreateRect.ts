import { canvas } from "../Main";
import { blockSetting } from "../setting";
import GameStatus from "../status";
import BlockClass from "../classes/BlockClass";

const CreateRect = () => {
    const newBlock = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter + 1);
    GameStatus.block = newBlock;
    canvas.fillRect(GameStatus.block.initialX, GameStatus.block.initialY, blockSetting.size, blockSetting.size);
}

export default CreateRect;