import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <a href="https://ead.ifms.edu.br"
          target="_blank"
          rel="noopener noreferrer">
            <Image
            width={102}
            height={48}
            src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}
            alt="Ícone do Moodle"
          />
          </a>
          <a className={styles.emailLink}
            href="...">julia.valentim@estudante.ifms.edu.br</a>
        </div>
        <div className={styles.footerText}>
          <p>
            &copy; 2024 <strong>Moodle Mistieri</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
