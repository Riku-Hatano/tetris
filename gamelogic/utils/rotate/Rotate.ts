import GameStatus from "../../status";
import { Setting } from "../../setting";
import KickLeftWall from "./rotatechecker/srs/KickLeftWall";
import KickRightWall from "./rotatechecker/srs/KickRightWall";
import KickFloor from "./rotatechecker/srs/KickFloor";
import SuperRotationSystem from "./rotatechecker/srs/SuperRotationSystem";
import ChangeField from "../changefield/ChangeField";

const Rotate = () => {
    const wall = 10;
    const x = GameStatus.block.positionX / GameStatus.block.size;
    const y = GameStatus.block.positionY / GameStatus.block.size;
    const bs = Setting.block.size;
    
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(KickLeftWall()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(bs * 2, 0, true, true) : ChangeField(bs, 0, true, true)
                    } else if(KickRightWall()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(-bs * 2, 0, true, true) : ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        x + 2 >= wall ? ChangeField(0, 0, true, true) : ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        x >= wall ? ChangeField(-bs * 2, 0, true, true) : ChangeField(-bs, 0, true, true); //exception!
                    } else if(SuperRotationSystem() === 2) {
                        x + 2 >= wall ? ChangeField(bs, 0, true, true) : ChangeField(bs * 2, 0, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        x + 2 >= wall ? ChangeField(bs, bs * 2, true, true) : ChangeField(bs * 2, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        x + 2 >= wall ? ChangeField(-bs, -bs, true, true) : ChangeField(0, -bs, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, bs, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs * 2, bs, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(-bs * 2, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, -bs, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(bs, 0, true, true);
                    } else if(KickRightWall()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(-bs * 2, 0, true, true) : ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        x - 1 > 0 ? ChangeField(-bs, 0, true, true) : ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs * 2, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(-bs * 2, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, bs, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(KickFloor()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(0, -bs * 2, true, true) : ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs * 2, -bs, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(bs * 2, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, bs, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
            }
            GameStatus.field.flags.twoBlocks = false;
            break;
        case "o":
            console.log("o-mino doesn't rotate");
            break;
        case "t":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(KickRightWall()) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        console.log("this pattern doesn't exist");
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
            }
            break;
        case "s":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(KickRightWall()) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
            }
            break;
        case "z":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(KickRightWall()) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
            }
            break;
        case "j":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(KickRightWall()) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                     break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                     break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                     break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, bs * 2, true, true);

                    } else {
                        console.log(false);
                    }
                     break;
            }
            break;
        case "l":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(KickRightWall()) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -bs, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, -bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(bs, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(bs, -bs, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, bs * 2, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(bs, bs * 2, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
            }
            break;
    }
}

export default Rotate;