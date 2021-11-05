import React from 'react';
import styles from './DropdownElement.module.scss';

const DropdownElement = ({text, func}) => (
  <li className={styles.DropdownElement} onClick={func}>
     {text}
  </li>
);

DropdownElement.defaultProps = {
  func:function(){},
}
export default DropdownElement;
