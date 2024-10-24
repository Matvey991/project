import { useEffect, useState } from "react";
import styles from "./SectionScooter.module.css";
import { getScooters } from "../../../../../helpers/api/api";
import { SectionScooterItem } from "../SectionScooterItem/SectionScooterItem";

export const SectionScooter = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    try {
      getScooters().then((res) => setState(res));
    } catch (error) {
      <h1>ОШИБКА</h1>;
    }
  }, []);

  return (
    <div className={styles.Scooters}>
      {state
        ? state.map((el) => <SectionScooterItem key={el.id} el={el} />)
        : null}
    </div>
  );
};
