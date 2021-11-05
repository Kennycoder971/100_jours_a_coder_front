import React from 'react';
import DropdownElement from '../DropdownElement/DropdownElement';
import styles from './SelectOption.module.scss';
import { IconContext } from "react-icons";
import {BsThreeDots} from 'react-icons/bs'
import { useState } from 'react';

const SelectOption = () => {

  const [active, setActive] = useState(false)

  return <ul className={`${styles.SelectOption} select-option`} 
  
  >
  <IconContext.Provider value={{ size: "1.5em"}}>
    <BsThreeDots onClick={e => setActive(!active)} />
  </IconContext.Provider>

  {
    active && <ul className={styles.dropdownMenu} >
    <DropdownElement text='Supprimer' />
  </ul>
  }
</ul>

}
  



export default SelectOption;
