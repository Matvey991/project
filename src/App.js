import { Header } from "./components/Layout/widgets/Header/Header";
import { Main } from "./components/Layout/widgets/Main/Main";
import { SectionScooter } from "./components/Layout/widgets/Main/SectionScooters/SectionScooter";
import styles from "./style.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <SectionScooter />
    </div>
  );
}

export default App;
