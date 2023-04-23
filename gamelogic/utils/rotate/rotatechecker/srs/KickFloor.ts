import GameStatus from "../../../../status";

const KickFloor = () => {
    const KickWall = () => {
        const wall = 10;
        switch(GameStatus.block.shape) {
            case "i":
                switch(GameStatus.block.rotateStatus) {
                    case 0:
                        console.log("kickwall i 0");
                        break;
                    case 1:
                        console.log("kickwall i 1");
                        break;
                    case 2:
                        console.log("kickwall i 2");
                        break;
                    case 3:
                        console.log("kickwall i 3");
                        break;
                }
                break;
            case "t":
                switch(GameStatus.block.rotateStatus) {
                    case 0:
                        console.log("kickwall t 0");
                        break;
                    case 1:
                        console.log("kickwall t 1");
                        break;
                    case 2:
                        console.log("kickwall t 2");
                        break;
                    case 3:
                        console.log("kickwall t 3");
                        break;
                }
                break;
            case "s":
                switch(GameStatus.block.rotateStatus) {
                    case 0:
                        console.log("kickwall s 0");
                        break;
                    case 1:
                        console.log("kickwall s 1");
                        break;
                    case 2:
                        console.log("kickwall s 2");
                        break;
                    case 3:
                        console.log("kickwall s 3");
                        break;
                }
                break;
            case "z":
                switch(GameStatus.block.rotateStatus) {
                    case 0:
                        console.log("kickwall z 0");
                        break;
                    case 1:
                        console.log("kickwall z 1");
                        break;
                    case 2:
                        console.log("kickwall z 2");
                        break;
                    case 3:
                        console.log("kickwall z 3");
                        break;
                }
                break;
            case "j":
                switch(GameStatus.block.rotateStatus) {
                    case 0:
                        console.log("kickwall j 0");
                        break;
                    case 1:
                        console.log("kickwall j 1");
                        break;
                    case 2:
                        console.log("kickwall j 2");
                        break;
                    case 3:
                        console.log("kickwall j 3");
                        break;
                }
                break;
            case "l":
                switch(GameStatus.block.rotateStatus) {
                    case 0:
                        console.log("kickwall l 0");
                        break;
                    case 1:
                        console.log("kickwall l 1");
                        break;
                    case 2:
                        console.log("kickwall l 2");
                        break;
                    case 3:
                        console.log("kickwall l 3");
                        break;
                }
                break;
        }
        return true;
    }
}

export default KickFloor;