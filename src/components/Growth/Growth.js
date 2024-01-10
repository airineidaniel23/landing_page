import styles from "./Growth.module.css";
import { growth } from "../../constants/growth";
import GrowthBox from "./GrowthBox";

const Growth = () => {
  return (
    <div className={`${styles.growthWrapper} center`}>
      <div className={`${styles.growthWrapperInner} center`}>
        <div className={styles.growthHeading}>
          <p>Misiunea Sirius este să ajute fermierii să le ofere oamenilor produse de pus pe masă</p>
        </div>
        <div className={`${styles.growthList} center`}>
          {growth.map(({ field, description }) => {
            return <GrowthBox field={field} description={description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Growth;
