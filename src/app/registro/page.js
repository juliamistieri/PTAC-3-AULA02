import React from "react";
import styles from "./registro.module.css";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className={styles.registrocontainer}>
      <h1>Registre-se agora!</h1>
      <form className={styles.registroform}>
        <div className={styles.formgroup}>
          <label htmlFor="nome">Seu nome</label>
          <input type="text" id="nome" name="nome" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="email">Número de celular ou e-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="senha">Insira a senha nova mais uma vez</label>
          <input type="password" id="senha" name="senha" />
        </div>

        <Link href="/">
        <button className={styles.buttonRegister} type="submit">
          Registrar
        </button>
        </Link>
        
        <p className={styles.centralizado}>
        Ao registrar uma conta, você aceita os Termos de Uso. Por favor, revise nossa Política de Privacidade, Política de Cookies e Notificação de Anúncios Baseados em Interesses.
        </p>
      </form>
    </div>
  );
}