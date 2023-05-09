import { speedSetting } from "../../setting";
import GameStatus from "../../status";
import CanRotateRight from "./rotatechecker/canRotateRight";
import KickLeftWall from "./rotatechecker/srs/KickLeftWall";
import KickRightWall from "./rotatechecker/srs/KickRightWall";
import KickFloor from "./rotatechecker/srs/KickFloor";
import SuperRotationSystem from "./rotatechecker/srs/SuperRotationSystem";
import ChangeField from "../changefield/ChangeField";
import { Spinnaker } from "@next/font/google";

const Rotate = () => {
    const field = GameStatus.field.field;
    const bottom = GameStatus.field.field.length - (GameStatus.block.initialY / GameStatus.block.size);
    const wall = 10;
    const x = GameStatus.block.positionX / GameStatus.block.size;
    const y = GameStatus.block.positionY / GameStatus.block.size;
    
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(KickLeftWall()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(20, 0, true, true) : ChangeField(10, 0, true, true)
                    } else if(KickRightWall()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(-20, 0, true, true) : ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        x + 2 >= wall ? ChangeField(0, 0, true, true) : ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        x >= wall ? ChangeField(-20, 0, true, true) : ChangeField(-10, 0, true, true); //exception!
                    } else if(SuperRotationSystem() === 2) {
                        x + 2 >= wall ? ChangeField(10, 0, true, true) : ChangeField(20, 0, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        x + 2 >= wall ? ChangeField(10, 20, true, true) : ChangeField(20, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        x + 2 >= wall ? ChangeField(-10, -10, true, true) : ChangeField(0, -10, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 10, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-20, 10, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(-20, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, -10, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(10, 0, true, true);
                    } else if(KickRightWall()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(-20, 0, true, true) : ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        x - 1 > 0 ? ChangeField(-10, 0, true, true) : ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-20, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(-20, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, 10, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(KickFloor()) {
                        GameStatus.field.flags.twoBlocks ? ChangeField(0, -20, true, true) : ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(20, -10, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(20, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, 10, true, true);
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
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        console.log("this pattern doesn't exist");
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, 20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, 20, true, true);
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
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, 20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, 20, true, true);
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
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, 20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, 20, true, true);
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
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                     break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, 20, true, true);
                    } else {
                        console.log(false);
                    }
                     break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                     break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, 20, true, true);

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
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, -20, true, true);
                    } else {
                        console.log(false);
                    } 
                    // if(KickRightWall() === true) {
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionX -= GameStatus.block.size;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     return;
                    // }
                    // if(SuperRotationSystem() === 0) {
                    //     console.log("l case0 return0")
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 1) {
                    //     console.log("l case0 return1");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionX -= speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 2) {
                    //     console.log("l case0 return2");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY += speedSetting.testSpeed; //super rotation system
                    //     GameStatus.block.positionX -= speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 3) {
                    //     console.log("l case0 return3");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY -= speedSetting.testSpeed * 2; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 4) {
                    //     console.log("l case0 return4");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY -= speedSetting.testSpeed * 2; //super rotation system
                    //     GameStatus.block.positionX -= speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else {
                    //     return false;
                    // }
                    break;
                case 1:
                    if(KickFloor()) {
                        ChangeField(0, -10, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(-10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(-10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(-10, 20, true, true);
                    } else {
                        console.log(false);
                    }
                    // if(KickFloor() === true) {
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY -= GameStatus.block.size;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     return;
                    // }
                    // if(SuperRotationSystem() === 0) {
                    //     console.log("l case1 return0")
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 1) {
                    //     console.log("l case1 return1")
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionX -= speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 2) {
                    //     console.log("l case1 return2")
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY -= speedSetting.testSpeed; //super rotation system
                    //     GameStatus.block.positionX -= speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 3) {
                    //     console.log("l case1 return3")
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    //     GameStatus.block.positionY += speedSetting.testSpeed * 2; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 4) {
                    //     console.log("l case1 return4")
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY += speedSetting.testSpeed * 2; //super roration system
                    //     GameStatus.block.positionX -= speedSetting.testSpeed; //super roration system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    // } else {
                    //     return false;
                    // }
                    break;
                case 2:
                    if(KickLeftWall()) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, 10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, -20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, -20, true, true);
                    } else {
                        console.log(false);
                    }
                    // if(KickLeftWall() === true) {
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    //     GameStatus.block.positionX += GameStatus.block.size;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     return;
                    // }
                    // if(SuperRotationSystem() === 0) {
                    //     console.log("l case2 return0");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 1) {
                    //     console.log("l case2 return1");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionX += speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 2) {
                    //     console.log("l case2 return2");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY += speedSetting.testSpeed; //super rotaiton system
                    //     GameStatus.block.positionX += speedSetting.testSpeed; //super rotaiton system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 3) {
                    //     console.log("l case2 return3");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY -= speedSetting.testSpeed * 2; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 4) {
                    //     console.log("l case2 return4");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY -= speedSetting.testSpeed * 2; //super rotation system
                    //     GameStatus.block.positionX += speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else {
                    //     return false;
                    // }
                    break;
                case 3:
                    if(SuperRotationSystem() === 0) {
                        ChangeField(0, 0, true, true);
                    } else if(SuperRotationSystem() === 1) {
                        ChangeField(10, 0, true, true);
                    } else if(SuperRotationSystem() === 2) {
                        ChangeField(10, -10, true, true);
                    } else if(SuperRotationSystem() === 3) {
                        ChangeField(0, 20, true, true);
                    } else if(SuperRotationSystem() === 4) {
                        ChangeField(10, 20, true, true);
                    } else {
                        console.log(false);
                    }
                    // if(SuperRotationSystem() === 0) {
                    //     console.log("l case3 return0");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 1) {
                    //     console.log("l case3 return1");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionX += speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 2) {
                    //     console.log("l case3 return2");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY -= speedSetting.testSpeed; //super rotation system
                    //     GameStatus.block.positionX += speedSetting.testSpeed; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 3) {
                    //     console.log("l case3 return3");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY += speedSetting.testSpeed * 2; //super rotation system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else if(SuperRotationSystem() === 4) {
                    //     console.log("l case3 return4");
                    //     GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus + 1) % 4;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
    
                    //     GameStatus.block.positionY += speedSetting.testSpeed * 2; //super rotaiton system
                    //     GameStatus.block.positionX += speedSetting.testSpeed; //super rotaiton system
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block;
                    //     GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block;
                    // } else {
                    //     return false;
                    // }
                    break;
            }
            break;
    }
}

export default Rotate;