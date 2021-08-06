import Link from "next/link";
import styles from "../styles/404.module.css";
const MissingPage = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.headLine}>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a className={styles.link}>homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default MissingPage;
