import Logo from '../svg/Logo'
import Navigation from './Navigation'
import styles from './Header.module.css'

const Header = props => (
    <header className={`container-fluid ${styles.Header}`}>
        <Logo />
        <Navigation />
    </header>
)

export default Header