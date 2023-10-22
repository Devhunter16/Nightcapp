import styles from "./Alert.module.css";

export default function Alert(props) {
    return (
        <div id={styles.alertContainer}>
            <button
                id={styles.exitButton}
                onClick={props.close}>X</button>
            <div id={styles.column}>
                <h1 id={styles.primaryMessage}>{props.primaryMessage}</h1>
                <p>{props.secondaryMessage}</p>
            </div>
        </div>
    );
};