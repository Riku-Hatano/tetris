import GameStatus from "../../status";


const CheckRow = () => {
    const field = GameStatus.field.field;
    const flags = [];

    for(let arr of field) {
        let flag = true;
        for(let cell of arr) {
            if(cell === null) {
                flag = false;
                break;
            }
        }
        flags.push(flag);
    }
}

export default CheckRow;