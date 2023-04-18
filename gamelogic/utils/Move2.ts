import MoveCheck from "./MoveCheck";

const Move2 = (direction: string) => {
    let movable;
    switch(direction) {
        case "down":
            movable = MoveCheck("down");
            break;
        case "right":
            movable = MoveCheck("right");
            break;
        case "left":
            movable = MoveCheck("left");
            break;
    }
}

export default Move2;