import Link from 'next/link'
import styles from './Navigation.module.css'
import PlusIcon from '../svg/PlusIcon'


const Navigation = props => (
    <nav className={styles.Navigation}>
        <Link href="/"><a className={styles.active}>Sobre Nós</a></Link>
        <Link href="/">Notícias</Link>
        <Link href="/">Iniciativas</Link>
        <Link href="/">Contactos</Link>
        <span className={styles.register}>
            <Link href="/">Registar</Link>
            <PlusIcon color="white"/>
        </span>
    </nav>
)

export default Navigation