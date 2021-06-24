import Image from 'next/image'
import classes from './CommunitySection.module.scss'
import ButtonLink from '@/components/BtnLink.js/BtnLink'

export default function CommunitySection() {
    return (
        <section className={classes.community}>
            

            <div className={classes.imgGrid}>
                <div className={classes.text}>
                    <h2>Rejoignez une <br />
                        communauté motivée.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, aenean pharetra, feugiat suspendisse faucibus blandit lectus.</p>
                    <ButtonLink to='/login' color='blue'>
                        {"S'inscrire"}
                    </ButtonLink>
                </div>
                <div className={`${classes.subGrid} ${classes.sub1}`}>
                    <Image src='/images/home-page/col-1.svg' height={120} width={50} />
                    <div className={classes.transTop}>
                        <Image src='/images/home-page/col-2.svg' height={120} width={50} />
                    </div>
                    <Image src='/images/home-page/col-3.svg' height={120} width={50} />
                </div>
                <div className={classes.subGrid}>
                <div className={classes.transTop}>
                    <Image src='/images/home-page/col-4.svg' height={120} width={50} />
                </div>
                    <Image src='/images/home-page/col-5.svg' height={120} width={50} />
                    <div className={classes.transTop}>
                        <Image src='/images/home-page/col-6.svg' height={120} width={50} />
                    </div>
                </div>

            </div>
        </section>
    )
}
