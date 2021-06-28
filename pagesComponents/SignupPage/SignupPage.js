import styles from './SignupPage.module.scss';
import Link from 'next/link'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const SignupPage = () => (
  <main className={styles.signupPage}>
    <div className={styles.illustrations}>
      <h1>Binevenue !</h1>
      <div className={styles.system}>
        <Image width={400} height={400} src='/images/login-signup/solar-system.svg' alt='wave' />
      </div>
      <div className={styles.undraw}>
        <Image width={320} height={400} src='/images/login-signup/undraw.svg' alt='wave' />
      </div>
      <div className={styles.wave}>
        <Image layout='fill' src='/images/login-signup/wave.svg' alt='wave' />

      </div>
    </div>
    <div className={styles.formWave}>
      <Image width={320} height={400} src='/images/login-signup/form-wave.svg' alt='waves' />
    </div>
    <div className={styles.container}>

      <div className={styles.formContainer}>
        <div className={styles.text}>
          <div className={styles.logo}>
            <Link href='/'>
              <a><Image height={50} width={50} src='/images/home-page/logo.svg' alt='Logo' /></a>
            </Link>
          </div>
          <h1>Bienvenue à <br /> toi!</h1>
          <p>Déjà un compte ? <Link href='/login'><a className='blue-link'>/ Se connecter</a></Link>  </p>
        </div>

        <form>
          <div className={styles.formControl}>
            <label htmlFor="email">Adresse mail</label>
            <input type="email" className='blue-input' id='email' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" className='blue-input' id='password' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="password2">Retaper le mot de passe</label>
            <input type="password" className='blue-input' id='password2' />
          </div>
          <p></p>
          <Button color='blue'>{"S'inscrire"}</Button>
          <Button color='fb'>{"S'inscrire"} avec Facebook</Button>
          <Button color='google'>{"S'inscrire"} avec Google</Button>
        </form>
      </div>
    </div>
  </main>
);

export default SignupPage;
