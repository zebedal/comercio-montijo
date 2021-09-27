import styles from './Destaque.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Destaque = props => {


    return (
        <div className={`container ${styles.Container}`}>
            <h2>Lojas em destaque</h2>
            <p>Pesquise uma seleção dos melhores comerciantes no Montijo</p>

            <div className={styles.grid}>

                <Link href="/" passHref>
                    <div className={styles.box}>
                        <Image src="/assets/img/destaque/area1.jpg" layout="fill" alt="" objectFit="cover"/>
                    </div>
                </Link>

                <Link href="/" passHref>
                    <div className={styles.box}>
                        <Image src="/assets/img/destaque/area2.jpg" layout="fill" alt="" objectFit="cover"/>
                    </div>
                </Link>

                <Link href="/" passHref>
                    <div className={styles.box}>
                        <Image src="/assets/img/destaque/area3.jpg" layout="fill" alt="" objectFit="cover"/>
                    </div>
                </Link>

                <Link href="/" passHref>
                    <div className={styles.box}>
                        <Image src="/assets/img/destaque/area4.jpg" layout="fill" alt="" objectFit="cover"/>
                    </div>
                </Link>

                <Link href="/" passHref>
                    <div className={styles.box}>
                    <Image src="/assets/img/destaque/area5.jpg" layout="fill" alt="" objectFit="cover"/>
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default Destaque