import styles from './ModalWrapper.module.css'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

const ModalWrapper = ({children}) =>  {

    const [_document, set_document] = useState(null)

    useEffect(() => {
        set_document(document)
    }, [])

    if(_document !== null) {
        return  ReactDOM.createPortal(<div className={styles.wrapper}>{children}</div>, _document.getElementById('portal'))
    } else return null

    
   
}

export default ModalWrapper