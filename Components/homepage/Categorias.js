import Categoria from './Categoria'
import { categorias } from '../../public/data/categorias-comercio'
import styles from './Categorias.module.css'
import  { useState } from 'react'

const Categorias = props => {
    const [selected, setSelected] = useState(0)

   


    return (
       
        <div className={`container ${styles.Container}`}>
            <div className={styles.absoluteContainer}>
                {categorias.map(cat => <Categoria 
                key={cat.id} 
                nome={cat.nome} 
                icon={cat.icon} 
                count={cat.count} 
                id={cat.id} 
                selected={selected === cat.id ? true : false} 
                click={setSelected} />)}
            </div>
            
        </div> 
    )
}

    

 


export default Categorias