import React from 'react';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import styles from './Challenge.module.scss';

const Challenge = () => (
  <div className={styles.Challenge}>
  <h3>Temps écoulé</h3>
    <div className={styles.charts}>
        <ProgressBar  />
        <ProgressBar time='Heures' />
        <ProgressBar time='Minutes' />
        <ProgressBar time='Secondes' />
    </div>
  </div>
);


Challenge.defaultProps = {};

export default Challenge;
