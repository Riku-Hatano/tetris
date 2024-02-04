import GameStatus from "../../status";
import { Setting } from "../../setting";
import KickLeftWall from "./rotatechecker/srs/KickLeftWall";
import KickRightWall from "./rotatechecker/srs/KickRightWall";
import KickFloor from "./rotatechecker/srs/KickFloor";
import SuperRotationSystemLeft from "./rotatechecker/srs/SuperRotationSystemLeft";
import ChangeField from "../changefield/ChangeField";

const RotateLeft = () => {
  const wall = 10;
  const x = GameStatus.block.positionX / GameStatus.block.size;
  const y = GameStatus.block.positionY / GameStatus.block.size;
  const bs = Setting.block.size;

  switch (GameStatus.block.shape) {
    case "i":
      switch ((GameStatus.block.rotateStatus + 3) % 4) {
        case 0:
          if (KickLeftWall(false)) {
            GameStatus.field.flags.twoBlocks
              ? ChangeField(bs * 2, -bs, true, true, false)
              : ChangeField(bs, -bs, true, true, false);
          } else if (KickRightWall(false)) {
            GameStatus.field.flags.twoBlocks
              ? ChangeField(-bs * 2, -bs, true, true, false)
              : ChangeField(-bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            console.log(`srs case: ${SuperRotationSystemLeft()}`);
            x + 2 >= wall
              ? ChangeField(0, -bs, true, true, false)
              : ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            console.log(`srs case: ${SuperRotationSystemLeft()}`);
            x >= wall
              ? ChangeField(bs * 2, 0, true, true, false)
              : ChangeField(bs * 2, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            console.log(`srs case: ${SuperRotationSystemLeft()}`);
            x + 2 >= wall
              ? ChangeField(-bs, 0, true, true, false)
              : ChangeField(-bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            console.log(`srs case: ${SuperRotationSystemLeft()}`);
            x + 2 >= wall
              ? ChangeField(bs * 2, -bs * 2, true, true, false)
              : ChangeField(bs * 2, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            console.log(`srs case: ${SuperRotationSystemLeft()}`);
            x + 2 >= wall
              ? ChangeField(-bs, bs, true, true, false)
              : ChangeField(-bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 1:
          if (KickFloor(false)) {
            ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs * 2, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(bs * 2, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, -bs, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 2:
          if (KickLeftWall(false)) {
            ChangeField(bs, bs, true, true, false);
          } else if (KickRightWall(false)) {
            GameStatus.field.flags.twoBlocks
              ? ChangeField(-bs * 2, bs, true, true, false)
              : ChangeField(-bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            // x - 1 > 0 ? ChangeField(-bs, 0, true, true, false) : ChangeField(0, bs, true, true, false);
            ChangeField(0, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs * 2, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(-bs * 2, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, -bs, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 3:
          if (KickFloor(false)) {
            GameStatus.field.flags.twoBlocks
              ? ChangeField(0, -bs * 2, true, true, false)
              : ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(-bs * 2, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(-bs * 2, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, bs, true, true, false);
          } else {
            console.log(false);
          }
          break;
      }
      GameStatus.field.flags.twoBlocks = false;
      break;
    case "o":
      console.log("o mino doesn't rotate");
      break;
    case "t":
      switch ((GameStatus.block.rotateStatus + 3) % 4) {
        case 0:
          if (KickLeftWall(false)) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 1:
          if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 2:
          if (KickRightWall(false)) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 3:
          if (KickFloor(false)) {
            ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            console.log(`return: ${SuperRotationSystemLeft()}`);
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            console.log(`return: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            console.log(`return: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            console.log(`return: ${SuperRotationSystemLeft()}`);
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            console.log(`return: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
      }
      break;
    case "s":
      switch ((GameStatus.block.rotateStatus + 3) % 4) {
        case 0:
          if (KickLeftWall(false)) {
            console.log("kick left wall");
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 1:
          if (KickFloor(false)) {
            ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 2:
          if (KickRightWall(false)) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 3:
          if (SuperRotationSystemLeft() === 0) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            console.log(`srs: ${SuperRotationSystemLeft()}`);
            ChangeField(bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
      }
      break;
    case "z":
      switch ((GameStatus.block.rotateStatus + 3) % 4) {
        case 0:
          if (KickLeftWall(false)) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 1:
          if (KickFloor()) {
            ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 2:
          if (KickRightWall(false)) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 3:
          if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
      }
      break;
    case "j":
      switch ((GameStatus.block.rotateStatus + 3) % 4) {
        case 0:
          if (KickLeftWall(false)) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 1:
          if (KickFloor()) {
            ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 2:
          if (KickRightWall(false)) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 3:
          if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
      }
      break;
    case "l":
      switch ((GameStatus.block.rotateStatus + 3) % 4) {
        case 0:
          if (KickLeftWall(false)) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 1:
          if (KickFloor()) {
            ChangeField(0, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 2:
          if (KickRightWall(false)) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(-bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(-bs, bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, -bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(-bs, -bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
        case 3:
          if (SuperRotationSystemLeft() === 0) {
            ChangeField(0, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 1) {
            ChangeField(bs, 0, true, true, false);
          } else if (SuperRotationSystemLeft() === 2) {
            ChangeField(bs, -bs, true, true, false);
          } else if (SuperRotationSystemLeft() === 3) {
            ChangeField(0, bs * 2, true, true, false);
          } else if (SuperRotationSystemLeft() === 4) {
            ChangeField(bs, bs * 2, true, true, false);
          } else {
            console.log(false);
          }
          break;
      }
      break;
  }
};

export default RotateLeft;
