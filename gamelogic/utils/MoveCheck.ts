import { Gamja_Flower } from "@next/font/google";
import GameStatus from "../status";

const MoveCheck = (direction: string): boolean => {
    switch(direction) {
        case "down":
            switch(GameStatus.block.shape) {
                case "i":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("down i 0");
                            break;
                        case 1:
                            console.log("down i 1");
                            break;
                        case 2:
                            console.log("down i 2");
                            break;
                        case 3:
                            console.log("down i 3");
                            break;
                    }
                    break;
                case "o":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("down o 0");
                            break;
                        case 1:
                            console.log("down o 1");
                            break;
                        case 2:
                            console.log("down o 2");
                            break;
                        case 3:
                            console.log("down o 3");
                            break;
                    }
                    break;
                case "t":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("down t 0");
                            break;
                        case 1:
                            console.log("down t 1");
                            break;
                        case 2:
                            console.log("down t 2");
                            break;
                        case 3:
                            console.log("down t 3");
                            break;
                    }
                    break;
                case "s":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("down s 0");
                            break;
                        case 1:
                            console.log("down s 1");
                            break;
                        case 2:
                            console.log("down s 2");
                            break;
                        case 3:
                            console.log("down s 3");
                            break;
                    }
                    break;
                case "z":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("down z 0");
                            break;
                        case 1:
                            console.log("down z 1");
                            break;
                        case 2:
                            console.log("down z 2");
                            break;
                        case 3:
                            console.log("down z 3");
                            break;
                    }
                    break;
                case "j":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("down j 0");
                            break;
                        case 1:
                            console.log("down j 1");
                            break;
                        case 2:
                            console.log("down j 2");
                            break;
                        case 3:
                            console.log("down j 3");
                            break;
                    }
                    break;
                case "l":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("down l 0");
                            break;
                        case 1:
                            console.log("down l 1");
                            break;
                        case 2:
                            console.log("down l 2");
                            break;
                        case 3:
                            console.log("down l 3");
                            break;
                    }
                    break;
            }
            return false;
        case "right":
            switch(GameStatus.block.shape) {
                case "i":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("right i 0");
                            break;
                        case 1:
                            console.log("right i 1");
                            break;
                        case 2:
                            console.log("right i 2");
                            break;
                        case 3:
                            console.log("right i 3");
                            break;
                    }
                    break;
                case "o":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("right o 0");
                            break;
                        case 1:
                            console.log("right o 1");
                            break;
                        case 2:
                            console.log("right o 2");
                            break;
                        case 3:
                            console.log("right o 3");
                            break;
                    }
                    break;
                case "t":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("right t 0");
                            break;
                        case 1:
                            console.log("right t 1");
                            break;
                        case 2:
                            console.log("right t 2");
                            break;
                        case 3:
                            console.log("right t 3");
                            break;
                    }
                    break;
                case "s":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("right s 0");
                            break;
                        case 1:
                            console.log("right s 1");
                            break;
                        case 2:
                            console.log("right s 2");
                            break;
                        case 3:
                            console.log("right s 3");
                            break;
                    }
                    break;
                case "z":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("right z 0");
                            break;
                        case 1:
                            console.log("right z 1");
                            break;
                        case 2:
                            console.log("right z 2");
                            break;
                        case 3:
                            console.log("right z 3");
                            break;
                    }
                    break;
                case "j":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("right j 0");
                            break;
                        case 1:
                            console.log("right j 1");
                            break;
                        case 2:
                            console.log("right j 2");
                            break;
                        case 3:
                            console.log("right j 3");
                            break;
                    }
                    break;
                case "l":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("right l 0");
                            break;
                        case 1:
                            console.log("right l 1");
                            break;
                        case 2:
                            console.log("right l 2");
                            break;
                        case 3:
                            console.log("right l 3");
                            break;
                    }
                    break;
            }
            return true;
        case "left":
            switch(GameStatus.block.shape) {
                case "i":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("left i 0");
                            break;
                        case 1:
                            console.log("left i 1");
                            break;
                        case 2:
                            console.log("left i 2");
                            break;
                        case 3:
                            console.log("left i 3");
                            break;
                    }
                    break;
                case "o":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("left o 0");
                            break;
                        case 1:
                            console.log("left o 1");
                            break;
                        case 2:
                            console.log("left o 2");
                            break;
                        case 3:
                            console.log("left o 3");
                            break;
                    }
                    break;
                case "t":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("left t 0");
                            break;
                        case 1:
                            console.log("left t 1");
                            break;
                        case 2:
                            console.log("left t 2");
                            break;
                        case 3:
                            console.log("left t 3");
                            break;
                    }
                    break;
                case "s":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("left s 0");
                            break;
                        case 1:
                            console.log("left s 1");
                            break;
                        case 2:
                            console.log("left s 2");
                            break;
                        case 3:
                            console.log("left s 3");
                            break;
                    }
                    break;
                case "z":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("left z 0");
                            break;
                        case 1:
                            console.log("left z 1");
                            break;
                        case 2:
                            console.log("left z 2");
                            break;
                        case 3:
                            console.log("left z 3");
                            break;
                    }
                    break;
                case "j":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("left j 0");
                            break;
                        case 1:
                            console.log("left j 1");
                            break;
                        case 2:
                            console.log("left j 2");
                            break;
                        case 3:
                            console.log("left j 3");
                            break;
                    }
                    break;
                case "l":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            console.log("left l 0");
                            break;
                        case 1:
                            console.log("left l 1");
                            break;
                        case 2:
                            console.log("left l 2");
                            break;
                        case 3:
                            console.log("left l 3");
                            break;
                    }
                    break;
            }
            return false;
    }
}

export default MoveCheck;