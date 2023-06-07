import { useMemo } from "react";
import styles from "./FormFieldsContainer.module.css";
const FormFieldsContainer = ({ firstName, lastName, propTop }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.groupParent} style={groupDiv1Style}>
      <div className={styles.groupContainer}>
        <div className={styles.groupContainer}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.firstName}>{firstName}</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupContainer}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.firstName}>{lastName}</div>
      </div>
    </div>
  );
};

export default FormFieldsContainer;
