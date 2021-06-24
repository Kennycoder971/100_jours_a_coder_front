import classes from './TasksSection.module.scss'
import Image from 'next/image'
export default function Tasks() {
    return (
        <section className={classes.tasks}>
            <div className={classes.container}>
                <h2>Découpez les <br /> en tâches</h2>
                <Image src='/images/home-page/phone-2.svg' height={250} width={150} />

            </div>
        </section>
    )
}
