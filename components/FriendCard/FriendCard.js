import React from 'react';
import styles from './FriendCard.module.scss';
import Image from 'next/dist/client/image';
import SelectOption from '../SelectOption/SelectOption';


const FriendCard = () => (
  <li className={styles.FriendCard}>
    <Image width={60} height={60} src="/images/user-profile/no-image.png" alt="Fond d'écran." />
    <h4>Donald</h4>

    <SelectOption/>

  </li>
);

export default FriendCard;
