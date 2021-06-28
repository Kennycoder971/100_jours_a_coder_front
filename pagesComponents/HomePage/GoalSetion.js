import classes from './GoalSection.module.scss'
import Image from 'next/image'
export default function GoalSetion() {
  return (
    <section className={classes.goals}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h2>Fixez vous <br /> des objectifs</h2>
          <p className={classes.desktopText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia ratione cum nostrum earum, sequi tenetur quia! Temporibus eveniet tenetur accusantium vitae sint, vero harum in pariatur reiciendis non ex!          </p>
        </div>
        <div className={classes.phoneImage}>
          <Image src="/images/home-page/phone-1.svg" height={250} width={150} alt='Téléphone' />
        </div>
        <div className={classes.deskImage}>
          <Image alt='Design ordinateur' src='/images/home-page/Img-objectifs-desktop.svg' height={250} width={400} />
        </div>
      </div>
    </section>
  )
}
