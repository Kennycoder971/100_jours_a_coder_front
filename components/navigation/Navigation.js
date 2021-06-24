import { Fragment, useState } from "react"
import classes from './Navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import HambergerMenu from "./HambergerMenu"


export default function Navigation() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <Fragment>
            <HambergerMenu setNavOpen={setNavOpen} />
            <nav className={`${classes.navigation} ${navOpen && classes.open}`}>
                <div className={classes.closeBtn} onClick={e => setNavOpen(false)}>
                    <span>x</span>
                </div>
                <div className={classes.user}>
                    <Image src='/images/navigation/user.png' width={50} height={50} alt='user' />
                    <span>Jean-Kévin</span>
                </div>
                <ul className={classes.navMenu}>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={16} height={16} src='/images/navigation/accueil.svg' alt='Accueil' />
                                <span>Accueil</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={16} height={16} src='/images/navigation/graphique.svg' alt='tableau de bord' />
                                <span>Tableau de bord</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={16} height={16} src='/images/navigation/tache.svg' alt='Tâches' />
                                <span>Tâches</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={16} height={16} src='/images/navigation/profil.svg' alt='Profil' />
                                <span>Profil</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={16} height={16} src='/images/navigation/parametres.svg' alt='Paramètres' />
                                <span>Paramètres</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}
