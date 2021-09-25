import styles from './Button.module.css'


const Button = ({ text, backgroundColor = 'var(--green)', textColor = 'white', borderColor = 'transparent', disabled, func }) => {

   
    if (disabled) {

        return (
            <div className={styles.buttonWrapper} style={{ background: 'grey', color: textColor, border: `1px solid `, pointerEvents: 'none' }}>
                {text}
            </div>
        )

    }


    return (
        <div onClick={() => func({type: text})} className={styles.buttonWrapper} style={{ background: backgroundColor, color: textColor, border: `1px solid ` }}>
            {text}
        </div>
    )
}
export default Button