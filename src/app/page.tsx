import Image from "next/image";
import styles from "./page.module.css";
import FullPage from "@/components/FullPage/FullPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FullPage />
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
