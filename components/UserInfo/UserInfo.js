import React from "react";
import styles from "./UserInfo.module.scss";
import Image from "next/image";

const UserInfo = () => (
  <div className={styles.UserInfo}>
    {" "}
    <Image
      width={50}
      height={50}
      src="/images/user-profile/no-image.png"
      alt="Fond d'écran."
    />
    <div className={styles.userDetails}>
      <h4>Jean-luc</h4>

      <div className={styles.lastMessage}>Salut bro !</div>
    </div>
  </div>
);

export default UserInfo;
