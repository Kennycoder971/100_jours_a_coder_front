import styles from './UserProfile.module.scss';
import Challenge from '@/components/Challenge/Challenge';
import Link from 'next/link'
import Image from 'next/image'

const UserProfile = () => (
  <div className={styles.container} >
    <div className={styles.hero}>
      <Image width={1100} height={500} src="/images/user-profile/no-bg.jpg" alt="Fond d'écran." />
      <div className={styles.userImage}>
        <Image width={60} height={60} src="/images/user-profile/no-image.png" alt="Fond d'écran." />
      </div>
    </div>
    <div className={styles.info}>
      <h3 className={styles.username}>Jean-claude</h3>
      <p>Développeur web</p>
    </div>
    <div className={styles.description}>
      <h3 className={styles.descriptionTitle}>Description</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores autem accusantium asperiores impedit dolorem omnis porro aliquid pariatur dolores totam quaerat architecto ratione dolor consequatur possimus, officia adipisci maxime!</p>
    </div>
    <Challenge />
  </div>
);

export default UserProfile;
