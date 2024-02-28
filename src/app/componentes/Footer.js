import Link from "next/link";
import styles from "./footer.module.css"
import Image from "next/image";

export default function Footer(){
    return(
        <header className={styles.footercab}>
          <Image width={100} height={100} src={"https://www.ifms.edu.br/marcaifms.png"}/>
        <h1>Footer</h1>
          <nav>
            <ul>
            <Link href="/">
                <li>Login</li>
                </Link>
            </ul>
          </nav>
        </header>
    );
}