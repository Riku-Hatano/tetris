import { useRef, useEffect, useState } from "react";
import { Setting } from "./setting";
import FieldClass from "./classes/FieldClass";
import GameStatus from "./status";
import KeyHandler from "./utils/KeyHandler";
import CreateRect from "./utils/gettobottom/CreateRect";
import DrawBlocks from "./utils/drawblocks/DrawBlocks";
import DrawNextBlocks from "./utils/drawNextBlocks/DrawNextBlocks";
import styles from "../css/game.module.css";
import GameOverModal from "../modals/GameOverModal";
import DropBlock, { dropBlockInterval } from "./utils/dropblock/DropBlock";
import GameStartModal from "../modals/GameStartModal";

let canvas: any; //initialization to export
let nextBlocks: any;
let gameOverModal: any;
let gameStartModal: any;
let handleKeyDown: any;

const field = new FieldClass(Setting.field.width, Setting.field.height); //these four lines are also for initialization. If these are inside of useEffect, CreateRect is called twice and see bug.
GameStatus.field = field.returnAll();
const block = CreateRect();
GameStatus.block = block.returnAll();
GameStatus.isOver = false;

const Main = () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const blockRef = useRef<HTMLCanvasElement>(null);
    const gameOverModalRef = useRef<HTMLDivElement>(null);
    const gameStartModalRef = useRef<HTMLDivElement>(null);
    // const element = ref.current;
    const [score, setScore] = useState(0); //this setScore will go through KeyHandler.ts -> Move.ts -> GetToBottom.ts -> CheckRow.ts and then finaly used.

    // const keyPress = (e: any) => {
    //     // KeyHandler(e, setScore);
    //     console.log("keypress");
    //     console.log(e.key);
    //     console.log(e);
    // }

    useEffect(() => {
        handleKeyDown = (e: any) => {
            KeyHandler(e, setScore)
        }
        const tetris = ref.current;
        const ctx: CanvasRenderingContext2D = tetris.getContext("2d");
        canvas = ctx; //to export the refference of canvas created at this file.
        ctx.fillRect(block.positionX, block.positionY, block.size, block.size); //create Tetris field.
        DrawBlocks(); //Draw first block depending on GameStatus.field.firld
        
        const nextBlock = blockRef.current;
        const blockCtx: CanvasRenderingContext2D = nextBlock.getContext("2d");
        nextBlocks = blockCtx;
        DrawNextBlocks();
        
        DropBlock(setScore);
        
        document.addEventListener("keydown", handleKeyDown);
        // element.addEventListener("keydown", handleKeyDown);

        // GameStatus.field.flags.isScored ? document.removeEventListener("keydown", handleKeyDown) : null;
        gameOverModal = gameOverModalRef;
        gameStartModal = gameStartModalRef;
        if(GameStatus.isOver === true) { //This is for disabling for user to play game anymore after game is over and go back to /game and start again.
            document.removeEventListener("keydown", handleKeyDown);
            // element.removeEventListener("keydown", handleKeyDown);
            clearInterval(dropBlockInterval);
            gameOverModal.current.classList.remove(styles.hide);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown); //to avoid for KeyHandler to be implemented multiple times because of component-mounting.
            // element.removeEventListener("keydown", handleKeyDown); //to avoid for KeyHandler to be implemented multiple times because of component-mounting.
            clearInterval(dropBlockInterval);
          };        
    }, []);

    return (
        <>
            <section className={styles.gameContainer}>
            {/* <section className={styles.gameContainer} tabIndex={0} onKeyDown={keyPress}> */}
                <div className={styles.left} style={{width: Setting.block.size * 7}}>
                    <p>{score}</p>
                </div>
                <canvas id="tetris" className={styles.tetris} width={Setting.field.width} height={Setting.field.height} ref={ref}></canvas>
                <div className={styles.right} style={{width: Setting.block.size * 7}}>
                    <div className={styles.nextBlockContainer}>
                        <h4 style={{height: Setting.block.size * 2}}>next blocks</h4>
                        <canvas id="nextBlock" ref={blockRef} className={styles.nextBlock}></canvas>
                    </div>
                </div>
                <div ref={gameOverModalRef} className={styles.hide}>
                    <GameOverModal score={score}></GameOverModal>
                </div>
                <div ref={gameStartModalRef} style={{display: "none"}}>
                    <GameStartModal></GameStartModal>
                </div>
            </section>
        </>
    )
}

export { canvas, nextBlocks, gameOverModal, gameStartModal, handleKeyDown }
export default Main;