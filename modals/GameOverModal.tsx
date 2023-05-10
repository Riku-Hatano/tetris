import styles from "../css/gameoverModal.module.css";

const GameOverModal = (props: any) => {
    return (
        <>
            <div className={styles.modalContainer}>
                <div>
                    <h1>game over</h1>
                    <p>your score is {props.score}</p>
                </div>
            </div>
        </>
    )
}

export default GameOverModal;