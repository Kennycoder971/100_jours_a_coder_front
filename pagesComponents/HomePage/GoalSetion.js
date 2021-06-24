import classes from './GoalSection.module.scss'
import Image from 'next/image'
export default function GoalSetion() {
    return (
        <section className={classes.goals}>
          <div className={classes.container}>
            <h2>Fixez vous <br /> des objectifs</h2>
            <Image src="/images/home-page/phone-1.svg" height={250} width={150} />
          </div>
        </section>
    )
}
