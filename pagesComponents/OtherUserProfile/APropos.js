import styles from "./APropos.module.scss";

export default function APropos() {
  return (
    <div className={styles.APropos}>
      <div className={styles.aProposContainer}>
        <h3>Vue d'ensemble</h3>
        <p>Nom: Jean</p>
        <p>Prénom: Jean</p>
        <p>Adresse: 2 rue de la poterne</p>
        <p>Téléphone: Jean</p>
        <p>Email: Jean@gmail.com</p>
      </div>
    </div>
  );
}
