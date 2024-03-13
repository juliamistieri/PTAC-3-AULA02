import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="https://www.ifms.edu.br"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            width={100}
            height={100}
            src={"https://www.ifms.edu.br/marcaifms.png"}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <Link className={styles.navLink} href="/">
            <span aria-label="Página inicial">Home</span>
          </Link>
          <Link className={styles.navLink} href="registro">
            Registrar
          </Link>
          <Link className={styles.navLink} href="localizacao">
            Localização
          </Link>
        </ul>
      </nav>
    </header>
  );
}