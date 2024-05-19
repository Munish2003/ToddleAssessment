import emptyImg from "../assets/emptyimg.png";
import styles from "./EmptyBox.module.css";
function EmptyBox() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.emptyimg} src={emptyImg} />
      </div>
    </>
  );
}

export default EmptyBox;
