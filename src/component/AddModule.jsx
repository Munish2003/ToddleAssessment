import React from "react";
import styles from "./AddModule.module.css";
import { RxCross1 } from "react-icons/rx";

function AddModule({ onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.moduleDiv}>
        <div className={styles.innerDiv1}>
          <h1>Create new module</h1>
          <p onClick={onClose}>
            <RxCross1 />
          </p>
        </div>
        <div className={styles.innerDiv2}>
          <h2>Module name</h2>
          <input type="text" placeholder="   Introduction to Trigonometry" />
        </div>
        <div className={styles.innerDiv3}>
          <button onClick={onClose}>Cancel</button>
          <button className={styles.button2}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default AddModule;
//main
