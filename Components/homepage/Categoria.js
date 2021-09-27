import styles from './Categoria.module.css'
import Link from 'next/link'


const Categoria = ({ nome, children, count, selected, click, id }) => {


    return (
        <Link href="/">
            <div className={`${styles.wrapper} ${selected ? styles.selected : ""}`} onClick={() => click(id)}>
                {children}
                <h5>{nome}</h5>
                <p>({count} listas)</p>
            </div>
        </Link>
    )
}


export default Categoria