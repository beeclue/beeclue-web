import Image from "next/image";
import Link from "next/link";
import styles from "./GlobalLogo.module.css";

export default function GlobalLogo() {
  return (
    <Link href="/" className={styles.logoContainer} aria-label="Beeclue Tech Home">
      <Image
        src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/beeclue-horizontal-white.png"
        alt="Beeclue Tech"
        width={160}
        height={40}
        className={styles.logoImage}
        priority
      />
    </Link>
  );
}
