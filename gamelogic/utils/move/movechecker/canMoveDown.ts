import GameStatus from "../../../status";

const canMoveDown = () => {
  const field = GameStatus.field.field;
  const bottom =
    GameStatus.field.field.length -
    GameStatus.block.initialY / GameStatus.block.size;
  let x = GameStatus.block.positionX / GameStatus.block.size;
  let y = GameStatus.block.positionY / GameStatus.block.size;

  switch (GameStatus.block.shape) {
    case "i":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          if (y > bottom) {
            return false;
          } //check tetrimino is the bottom of field
          if (
            field[y + 1][x - 2] === null &&
            field[y + 1][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 1:
          if (y + 1 > bottom) {
            return false;
          } //check tetrimino is the bottom of field
          if (field[y + 2][x] === null) {
            return true;
          } else {
            return false;
          }
        case 2:
          if (y > bottom) {
            return false;
          } //check tetrimino is the bottom of field
          if (
            field[y + 1][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 1][x + 1] === null &&
            field[y + 1][x + 2] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 3:
          if (y + 2 > bottom) {
            return false;
          } //check tetrimino is the bottom of field
          if (field[y + 3][x] === null) {
            return true;
          } else {
            return false;
          }
      }
      break;
    case "o":
      if (y + 1 > bottom) {
        return false;
      } //check tetrimino is the bottom of field
      if (field[y + 2][x] === null && field[y + 2][x - 1] === null) {
        return true;
      } else {
        return false;
      }
      break;
    case "t":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          if (y > bottom) {
            return false;
          }
          if (
            field[y + 1][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 1:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 2][x] === null && field[y + 1][x + 1] === null) {
            return true;
          } else {
            return false;
          }
        case 2:
          if (y + 1 > bottom) {
            return false;
          }
          if (
            field[y + 1][x - 1] === null &&
            field[y + 2][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 3:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 1][x - 1] === null && field[y + 2][x] === null) {
            return true;
          } else {
            return false;
          }
      }
      break;
    case "s":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          if (y > bottom) {
            return false;
          }
          if (
            field[y + 1][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 1:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 1][x] === null && field[y + 2][x + 1] === null) {
            return true;
          } else {
            return false;
          }
        case 2:
          if (y + 1 > bottom) {
            return false;
          }
          if (
            field[y + 2][x - 1] === null &&
            field[y + 2][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 3:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 2][x] === null && field[y + 1][x - 1] === null) {
            return true;
          } else {
            return false;
          }
      }
      break;
    case "z":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          if (y > bottom) {
            return false;
          }
          if (
            field[y][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 1:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 2][x] === null && field[y + 1][x + 1] === null) {
            return true;
          } else {
            return false;
          }
        case 2:
          if (y + 1 > bottom) {
            return false;
          }
          if (
            field[y + 1][x - 1] === null &&
            field[y + 2][x] === null &&
            field[y + 2][x + 1] === null
          ) {
            console.log("true");
            return true;
          } else {
            console.log("false");
            return false;
          }
        case 3:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 2][x - 1] === null && field[y + 1][x] === null) {
            return true;
          } else {
            return false;
          }
      }
      break;
    case "j":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          if (y > bottom) {
            return false;
          }
          if (
            field[y + 1][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 1:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 2][x] === null && field[y][x + 1] === null) {
            return true;
          } else {
            return false;
          }
        case 2:
          if (y + 1 > bottom) {
            return false;
          }
          if (
            field[y + 1][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 2][x + 1] === null
          ) {
            console.log("true");
            return true;
          } else {
            console.log("false");
            return false;
          }
        case 3:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 2][x - 1] === null && field[y + 2][x] === null) {
            return true;
          } else {
            return false;
          }
      }
      break;
    case "l":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          if (y > bottom) {
            return false;
          }
          if (
            field[y + 1][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 1:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y + 2][x] === null && field[y + 2][x + 1] === null) {
            return true;
          } else {
            return false;
          }
        case 2:
          if (y + 1 > bottom) {
            return false;
          }
          if (
            field[y + 2][x - 1] === null &&
            field[y + 1][x] === null &&
            field[y + 1][x + 1] === null
          ) {
            return true;
          } else {
            return false;
          }
        case 3:
          if (y + 1 > bottom) {
            return false;
          }
          if (field[y][x - 1] === null && field[y + 2][x] === null) {
            return true;
          } else {
            return false;
          }
      }
      break;
  }
};

export default canMoveDown;
