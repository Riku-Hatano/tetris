import GameStatus from "../status";
import CanRotateRight from "./rotatechecker/canRotateRight";

const Rotate = () => {
    switch(GameStatus.block.shape) {
        case "i":
            switch((GameStatus.block.rotateStatus + 1) % 4) {
                case 0:
                    if(CanRotateRight() === true) {
                        GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus += 1) % 4;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place
    
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    } else {
                        console.log("false cannot rotate right");
                    }
                    break;
                case 1:
                    if(CanRotateRight() === true) {
                        GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus += 1) % 4;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
    
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    } else {
                        console.log("false cannot rotate right");
                    }
                    break;
                case 2:
                    if(CanRotateRight() === true) {
                        GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus += 1) % 4;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place
    
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] = GameStatus.block.id;
                    } else {
                        console.log("false cannot rotate right");
                    }
                    break;
                case 3:
                    if(CanRotateRight() === true) {
                        GameStatus.block.rotateStatus = (GameStatus.block.rotateStatus += 1) % 4;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] = null; //delete previous place
    
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                        GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    } else {
                        console.log("false cannot rotate right");
                    }
                    break;
            }
            break;
        case "o":
            switch(GameStatus.block.rotateStatus % 4) {
                case 0:
                    console.log("o rotate status is 0");
                    break;
                case 1:
                    console.log("o rotate status is 1");
                    break;
                case 2:
                    console.log("o rotate status is 2");
                    break;
                case 3:
                    console.log("o rotate statusb is 3");
                    break;
            }
            break;
        case "t":
            switch(GameStatus.block.rotateStatus) {
                case 0:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    break;
                case 1:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    break;
                case 2:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    break;
                case 3:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    break;
            }
            break;
        case "s":
            switch(GameStatus.block.rotateStatus % 4) {
                case 0:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case 1:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case 2:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case 3:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
            }
            break;
        case "z":
            switch(GameStatus.block.rotateStatus % 4) {
                case 0:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case 1:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size ][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    console.log("z rotate status is 1");
                    break;
                case 2:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case 3:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    break;
            }
            break;
        case "j":
            switch(GameStatus.block.rotateStatus % 4) {
                case 0:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case 1:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case 2:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case 3:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
            }
            break;
        case "l":
            switch(GameStatus.block.rotateStatus % 4) {
                case 0:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case 1:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case 2:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case 3:
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
            }
            break;
    }
}

export default Rotate;