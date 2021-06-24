import Image from 'next/image'
import classes from './CommunitySection.module.scss'
import ButtonLink from '@/components/BtnLink.js/BtnLink'
export default function CommunitySection() {
    return (
        <section className={classes.community}>
            <div className={classes.container}>
                <h2>Rejoignez une <br />
                    communauté motivée.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, aenean pharetra, feugiat suspendisse faucibus blandit lectus.</p>
                <ButtonLink to='/login' color='blue'>
                    {"S'inscrire"}
                </ButtonLink>

            </div>
        </section>
    )
}
