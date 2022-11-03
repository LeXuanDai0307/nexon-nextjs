import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Le Xuan Dai</h1>
      <button>
        <Link href="/events">Events</Link>
      </button>
      <button>
        <Link href="/products">Products</Link>
      </button>
    </div>
  );
}
