import React, { useState } from "react";
import styles from "./UserProfile.module.scss";
import Challenge from "@/components/Challenge/Challenge";
import APropos from "./Apropos";
import FriendList from "./FriendList";
import Link from "next/link";
import Image from "next/image";

const UserProfile = () => {
  const [selected, setSelected] = useState(0);
  const tabs = ["Profil", "À propos", "Amis"].map((tab, index) => {
    return (
      <li
        onClick={(e) => setSelected(index)}
        key={index}
        className={selected === index && styles.selected}
      >
        {tab}
      </li>
    );
  });
  return (
    <div className={styles.container}>
      <main className={styles.hero}>
        <Image
          width={1100}
          height={500}
          src="/images/user-profile/no-bg.jpg"
          alt="Fond d'écran."
        />
        <div className={styles.userImage}>
          <Image
            width={60}
            height={60}
            src="/images/user-profile/no-image.png"
            alt="Fond d'écran."
          />
        </div>
      </main>
      <div className={styles.info}>
        <h3 className={styles.username}>Jean-claude</h3>
        <p>Développeur web</p>
      </div>
      <ul className={styles.tabs}>{tabs}</ul>

      {selected === 0 && (
        <React.Fragment>
          <div className={styles.description}>
            <h3 className={styles.descriptionTitle}>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              maiores autem accusantium asperiores impedit dolorem omnis porro
              aliquid pariatur dolores totam quaerat architecto ratione dolor
              consequatur possimus, officia adipisci maxime!
            </p>
          </div>
          <Challenge />
        </React.Fragment>
      )}

      {selected === 1 && <APropos />}
      {selected === 2 && <FriendList />}
    </div>
  );
};

export default UserProfile;
