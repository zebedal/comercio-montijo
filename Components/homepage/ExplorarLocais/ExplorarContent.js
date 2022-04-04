import styles from './ExplorarContent.module.css'
import Local from './Local'

const ExplorarContent = ({data}) => (
    <div className={`container ${styles.Grid}`}>
        {data.map(obj => <div key={obj.id} className={styles.gridBox}> <Local {...obj} /> </div>)}
    </div>
)

export default ExplorarContent