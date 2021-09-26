import styles from './Categoria.module.css'
import Image from 'next/image'


const Categoria = ({nome, icon, count, selected, click, id}) => {

    

    return (
        <div className={`${styles.wrapper} ${selected ? styles.selected : ""}`} onClick={() => click(id)}>
        <Image src={icon} width={20} height={20} alt=""/>
        <h5>{nome}</h5>
        <p>({count} listas)</p>
    </div>
    )
}


export default Categoria