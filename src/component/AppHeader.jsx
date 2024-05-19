import { useState } from "react";
import styles from "./AppHeader.module.css";
import { BsPlusLg } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { GoLink } from "react-icons/go";
import { TfiUpload } from "react-icons/tfi";
import { CgMenuBoxed } from "react-icons/cg";

function AppHeader({ setShowAddModule }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleCreateModuleClick = () => {
    console.log("Create module clicked");
    setShowAddModule(true);
    setShowOptions(false);
  };

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.heading}>Course builder</h1>
      <div className={styles.addButton}>
        <button
          className={styles.button}
          onClick={() => setShowOptions(!showOptions)}
        >
          <span>
            <BsPlusLg />
          </span>
          Add
          <span>
            <IoMdArrowDropup />
          </span>
        </button>
        {showOptions && (
          <div className={styles.options}>
            <button onClick={handleCreateModuleClick}>
              <span className={styles.optionIcons}>
                <CgMenuBoxed />
              </span>
              Create module
            </button>
            <button>
              <span className={styles.optionIcons}>
                <GoLink />
              </span>
              Add a link
            </button>
            <button>
              <span className={styles.optionIcons}>
                <TfiUpload />
              </span>
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
//main
export default AppHeader;
