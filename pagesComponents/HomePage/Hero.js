import classes from './Hero.module.scss'
import BtnLink from '@/components/BtnLink.js/BtnLink'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Hero() {
    return (
        <Fragment>
            <main className={classes.hero}>

                <h1>{'N\''}abandonnez <br /> plus vos <br /> résolutions.</h1>
                <p>Accomplissez vos objectifs en 90 jours <br />
                    et partagez vos résultats!</p>

                <div className={classes.btnContainer}>
                    <BtnLink color='blue' to='/login'>
                        Se connecter
                    </BtnLink>

                    <BtnLink color='black' to='/'>
                        {' C\'est quoi ?'}
                    </BtnLink>
                </div>

                <div className={classes.mainBg}></div>
            </main>
            <div className={classes.imgContainer}>
                <Image alt='Objectif' src='/images/home-page/img-header.svg' height={350} width={350} />
            </div>
        </Fragment>
    )
}
