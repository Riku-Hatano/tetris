import GameStatus from "../../status";

const DeletePrevouisBlock = () => {
  const field = GameStatus.field.field;
  let x = GameStatus.block.positionX / GameStatus.block.size;
  let y = GameStatus.block.positionY / GameStatus.block.size;

  switch (GameStatus.block.shape) {
    case "i":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y][x - 2] = null;
          field[y][x + 1] = null;
          break;
        case 1:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y - 2][x] = null;
          field[y + 1][x] = null;
          break;
        case 2:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y][x + 1] = null;
          field[y][x + 2] = null;
          break;
        case 3:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y + 1][x] = null;
          field[y + 2][x] = null;
          break;
      }
      break;
    case "o":
      field[y][x] = null;
      field[y][x - 1] = null;
      field[y + 1][x] = null;
      field[y + 1][x - 1] = null;
      break;
    case "t":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y][x + 1] = null;
          field[y - 1][x] = null;
          break;
        case 1:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y][x + 1] = null;
          field[y + 1][x] = null;
          break;
        case 2:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y][x + 1] = null;
          field[y + 1][x] = null;
          break;
        case 3:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y - 1][x] = null;
          field[y + 1][x] = null;
          break;
      }
      break;
    case "s":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y - 1][x + 1] = null;
          field[y][x - 1] = null;
          break;
        case 1:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y][x + 1] = null;
          field[y + 1][x + 1] = null;
          break;
        case 2:
          field[y][x] = null;
          field[y + 1][x] = null;
          field[y][x + 1] = null;
          field[y + 1][x - 1] = null;
          break;
        case 3:
          field[y][x] = null;
          field[y - 1][x - 1] = null;
          field[y][x - 1] = null;
          field[y + 1][x] = null;
          break;
      }
      break;
    case "z":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y - 1][x - 1] = null;
          field[y][x + 1] = null;
          break;
        case 1:
          field[y][x] = null;
          field[y - 1][x + 1] = null;
          field[y][x + 1] = null;
          field[y + 1][x] = null;
          break;
        case 2:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y + 1][x] = null;
          field[y + 1][x + 1] = null;
          break;
        case 3:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y][x - 1] = null;
          field[y + 1][x - 1] = null;
          break;
      }
      break;
    case "j":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          field[y][x] = null;
          field[y - 1][x - 1] = null;
          field[y][x + 1] = null;
          field[y][x - 1] = null;
          break;
        case 1:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y + 1][x] = null;
          field[y - 1][x + 1] = null;
          break;
        case 2:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y][x + 1] = null;
          field[y + 1][x + 1] = null;
          break;
        case 3:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y + 1][x] = null;
          field[y + 1][x - 1] = null;
          break;
      }
      break;
    case "l":
      switch (GameStatus.block.rotateStatus) {
        case 0:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y][x + 1] = null;
          field[y - 1][x + 1] = null;
          break;
        case 1:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y + 1][x] = null;
          field[y + 1][x + 1] = null;
          break;
        case 2:
          field[y][x] = null;
          field[y][x - 1] = null;
          field[y][x + 1] = null;
          field[y + 1][x - 1] = null;
          break;
        case 3:
          field[y][x] = null;
          field[y - 1][x] = null;
          field[y + 1][x] = null;
          field[y - 1][x - 1] = null;
          break;
      }
      break;
  }
  GameStatus.field.field = field;
};

export default DeletePrevouisBlock;
