import styles from './Local.module.css'
import { Divider } from 'antd'
import Image from 'next/image'
import LocalStatus from '../../UI/LocalStatus'
import {CameraOutlined} from '@ant-design/icons'

const Local = props => {
     


    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <Image src={props.img} layout="fill" objectFit="cover" alt={props.nome} />
                <div className={styles.subCategorias}>
                    {props.subCategorias.join(' , ')}
                </div>
                <LocalStatus status={props.openStatus} absolute nome={props.nome} />
            </div>
            <div className={styles.title}>
                <h3>{props.nome}</h3>
                <address>{props.location}</address>
            </div>
            <Divider style={{margin:0}} />
            <div className={styles.desc}>
                {props.desc}
            </div>
            <Divider style={{margin:0}} />
            <div className={styles.footer}>
                <CameraOutlined />&nbsp;
                {props.numFotos}
            </div>
        </div>
    )

}
export default Local