import GameStatus from "../../status";
import { Setting } from "../../setting";
import KickLeftWall from "./rotatechecker/srs/KickLeftWall";
import KickRightWall from "./rotatechecker/srs/KickRightWall";
import KickFloor from "./rotatechecker/srs/KickFloor";
import SuperRotationSystem from "./rotatechecker/srs/SuperRotationSystem";
import ChangeField from "../changefield/ChangeField";

const RotateLeft = () => {
    const wall = 10;
    const x = GameStatus.block.positionX / GameStatus.block.size;
    const y = GameStatus.block.positionY / GameStatus.block.size;
    const bs = Setting.block.size;

    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 3) % 4) {
                case 0:
                    x + 2 >= wall ? ChangeField(0, 0, true, true, false) : ChangeField(bs, 0, true, true, false);
                    break;
                case 1:
                    ChangeField(0, bs, true, true, false);
                    break;
                case 2:
                    x + 3 > 0 ? ChangeField(-bs, 0, true, true, false) : ChangeField(0, 0, true, true, false);
                    break;
                case 3:
                    ChangeField(0, -bs, true, true, false);
                    break;
            }
            break;
        case "o":
            console.log("o mino doesn't rotate");
            break;
        case "t":
            switch((GameStatus.block.rotateStatus + 3) % 4) {
                case 0:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 1:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 2:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 3:
                    ChangeField(0, 0, true, true, false);
                    break;
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 3) % 4) {
                case 0:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 1:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 2:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 3:
                    ChangeField(0, 0, true, true, false);
                    break;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 3) % 4) {
                case 0:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 1:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 2:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 3:
                    ChangeField(0, 0, true, true, false);
                    break;
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 3) % 4) {
                case 0:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 1:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 2:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 3:
                    ChangeField(0, 0, true, true, false);
                    break;
            }
            break;
        case "l":
            switch((GameStatus.block.rotateStatus + 3) % 4) {
                case 0:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 1:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 2:
                    ChangeField(0, 0, true, true, false);
                    break;
                case 3:
                    ChangeField(0, 0, true, true, false);
                    break;
            }
            break;
    }
}

export default RotateLeft;