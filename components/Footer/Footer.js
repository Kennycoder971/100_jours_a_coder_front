import Link from 'next/link'
import BtnLink from '../BtnLink.js/BtnLink'
import classes from './Footer.module.scss'
import Image from "next/image"

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.wavesContainer}>
                <Image src='/images/home-page/footer-waves.svg' width={700} height={100} />
            </div>
            <div className={classes.container}>

                <p>Copyright &#169; L’année de 90j</p>
                <ul>
                    <li> <Link href="/">Accueil</Link> </li>
                    <li> <Link href="/">Objectifs</Link> </li>
                    <li> <Link href="/">Tâches</Link> </li>
                    <li> <Link href="/">Profil</Link> </li>
                    <li> <Link href="/">Tableau de bord</Link> </li>
                    <li><BtnLink color='blue' to='/login'>Inscription</BtnLink></li>
                    <li><BtnLink color='green' to='/login'>Connexion</BtnLink></li>
                </ul>
            </div>
        </footer>
    )
}
