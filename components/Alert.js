import styles from "./styles/Alert.module.css";

export default function Alert(props) {
    return (
        <div id={styles.container}>
            <h1>{props.primaryMessage}</h1>
            <p>{props.secondaryMessage}</p>
        </div>
    );
};