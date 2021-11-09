import React, { useState, useEffect } from "react";
import styles from "./UserProfile.module.scss";
import Challenge from "@/components/Challenge/Challenge";
import APropos from "./Apropos";
import FriendList from "./FriendList";
import Link from "next/link";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import ProfileModal from "./ProfileModal";

const UserProfile = () => {
  // For the tabs
  const [selected, setSelected] = useState(0);
  const tabs = ["Profil", "À propos", "Amis"].map((tab, index) => {
    return (
      <li
        onClick={(e) => setSelected(index)}
        key={index}
        className={selected === index ? styles.selected : ""}
      >
        {tab}
      </li>
    );
  });

  // For the modal
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [showModal]);

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

      <div className={styles.user}>
        <div className={styles.userInfo}>
          <h3 className={styles.username}>Jean-claude</h3>
          <p>Développeur web</p>
        </div>
        <div
          className={styles.userSettings}
          onClick={(e) => setShowModal(true)}
        >
          <FaRegEnvelope />
        </div>
      </div>

      {showModal && (
        <ProfileModal showModal={showModal} setShowModal={setShowModal} />
      )}

      <ul className={styles.tabs}>{tabs}</ul>

      {selected === 0 && (
        <React.Fragment>
          <article className={styles.description}>
            <h3 className={styles.descriptionTitle}>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              maiores autem accusantium asperiores impedit dolorem omnis porro
              aliquid pariatur dolores totam quaerat architecto ratione dolor
              consequatur possimus, officia adipisci maxime!
            </p>
          </article>

          <Challenge />
        </React.Fragment>
      )}

      {selected === 1 && <APropos />}

      {selected === 2 && <FriendList />}
    </div>
  );
};

export default UserProfile;
