import styles from "./style";
import {
  Navbar,
  Hero,
  ImageCard,
  ContactMe,
} from "./components";

const App = () => (
  <div className="bg-primary overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} font-poppins`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div
      className={`bg-white ${styles.paddingY} ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <div className="lg:flex gap-10 lg:mb-10">
          <ImageCard />
        </div>
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <ContactMe />
      </div>
    </div>
  </div>
);

export default App;
