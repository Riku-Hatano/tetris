import Game from "../../pages/game";
import GameStatus from "../status";

const Move = (direction: string) => {
    switch(direction) {
        case "right":
            switch(GameStatus.block.shape) {
                case "i":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size ][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2 - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                            break;
                        case 1:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            break;
                        case 2:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2 - 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] = GameStatus.block.id;
                            break;
                        case 3: 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            break;
                    }
                    break;
                case "o":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size ][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size ][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 ][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 ][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "t":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            break;
                        case 1: 
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                    }
                    break;
                case "s":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "z":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case "j":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "l":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1 - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
            }
            break;
        case "left":
            switch(GameStatus.block.shape) {
                case "i":
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size ][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2 + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                            break;
                        case 1:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            break;
                        case 2:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2 + 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] = GameStatus.block.id;
                            break;
                        case 3:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    }
                    break;
                case "o":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size ][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size ][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 ][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 ][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "t":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    break;
                case "s":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "z":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case "j":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "l":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1 + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1 + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
            }
            break;
        case "down":
            switch(GameStatus.block.shape) {
                case "i": 
                    switch(GameStatus.block.rotateStatus) {
                        case 0:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 2] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 2] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                            break;
                        case 1:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2 - 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id; 
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            break;
                        case 2:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 2] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 2] = GameStatus.block.id;
                            break;
                        case 3:
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2 - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place

                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 2][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                            GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    }
                    break;
                case "o":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "t":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    break;
                case "s":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "z":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1 - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size + 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
                case "j":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    break;
                case "l":
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size - 1] = null;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1 - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = null; //delete previous place
        
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size][GameStatus.block.positionX / GameStatus.block.size - 1] = GameStatus.block.id;
                    GameStatus.field.field[GameStatus.block.positionY / GameStatus.block.size - 1][GameStatus.block.positionX / GameStatus.block.size + 1] = GameStatus.block.id;
                    break;
            }
            break;
    }
}

export default Move;