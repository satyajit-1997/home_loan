import { useMemo } from "react";
import styles from "./LoanProgramsContainer.module.css";
const LoanProgramsContainer = ({ maskGroup, loanPrograms, propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.maskGroupParent} style={groupDivStyle}>
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <b className={styles.loanPrograms}>{loanPrograms}</b>
      <div className={styles.theUnitedStatesContainer}>
        <p className={styles.theUnitedStates}>The united states department</p>
        <p className={styles.theUnitedStates}>of agriculture (USDA) gives...</p>
      </div>
    </div>
  );
};

export default LoanProgramsContainer;
