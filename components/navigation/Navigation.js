import { Fragment } from "react"
import classes from './Navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function Navigation() {
    return (
        <Fragment>
            <div className={classes.hamberger}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
            </div>
            <nav className={classes.navigation}>
                <div className={classes.closeBtn}>
                    x
                </div>
                <div className={classes.user}>
                    <Image src='/images/navigation/user.svg' />
                    <span>Jean-Kévin</span>
                </div>
                <ul className={classes.navMenu}>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={14} height={14} src='/images/navigation/accueil.svg' />
                               <span>Accueil</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={14} height={14} src='/images/navigation/graphiaue.svg' />
                               <span>Tableau de bord</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={14} height={14} src='/images/navigation/taches.svg' />
                               <span>Tâches</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={14} height={14} src='/images/navigation/profil.svg' />
                               <span>Profil</span>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href='/'>
                            <a>
                                <Image width={14} height={14} src='/images/navigation/parametres.svg' />
                               <span>Paramètres</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}
