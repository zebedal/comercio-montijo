import styles from './RegisterForm.module.css'
import StepsHeader from './StepsHeader'
import { useReducer, useState, useRef } from 'react'
import Button from '../UI/Button'

const navReducer = (state, action) => {

    switch (action.type) {
        case 'forward':
            return state + 1
        case 'back':
            return state - 1

    }
}





const RegisterForm = props => {

    const formRef = useRef()

    const [active, dispatch] = useReducer(navReducer, 1)
    const [formIsValid, setFormIsValid] = useState(false)

    const [formState, setFormState] = useState({
        step1: {
            nome: {
                text: "",
                required: true,
                maxLength:40,
                valid: false
            },
            morada: {
                text: "",
                required: true,
                maxLength:50,
                valid: false
            },
            telefone: {
                text: "",
                required: true,
                maxLength:15,
                valid: false
            },
            website: {
                text: ""
            }
            
        }
    })


    const handleInputChangeForm1 = evt => {
     const newState = {...formState}
     const newObj = {...newState.step1[evt.target.name], text: evt.target.value}

    //check input validity
    const isValid = checkFormInputValidity(evt.target)

    
    newState.step1[evt.target.name] = newObj

    setFormState(newState)
    
    }

    const checkFormInputValidity = evtTarget => {

        const obj = {...formState.step1[evtTarget.name]}
        if(obj.text.trim() === 0) return `O ${evtTarget.name} não pode estar vazio`
        if(obj.text.trim() > obj.maxLength) return `O ${evtTarget.name} não pode conter mais de ${obj.maxLength} caracteres`
    
        return true
    
    }

    return (
        <div className={styles.wrapper}>
            <h2>É comerciante?</h2>
            <p>Registe-se gratuitamente e faça parte da maior comunidade de comerciantes do Montijo</p>
            <br />
            <StepsHeader active={active} />
            <br />

            <form ref={formRef}>
                {active === 1 ? <div className={styles.step}>

                    <div className={styles.formControl}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" placeholder="Inserir nome..." name="nome" value={formState.step1.nome.text} onChange={handleInputChangeForm1}></input>
                    </div>

                    <div className={styles.formControl}>
                        <label htmlFor="morada">Morada:</label>
                        <input type="text" placeholder="Inserir morada..." name="morada" value={formState.step1.morada.text} onChange={handleInputChangeForm1}></input>
                    </div>

                    <div className={styles.formControl}>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" placeholder="Inserir telefone..." name="telefone" value={formState.step1.telefone.text} onChange={handleInputChangeForm1}></input>
                    </div>

                    <div className={styles.formControl}>
                        <label htmlFor="website">Website:</label>
                        <input type="text" placeholder="Inserir endereço website..." name="website" value={formState.step1.website.text} onChange={handleInputChangeForm1}></input>
                    </div>

                </div> : null}

                {active === 2 ? <div className={styles.step}>
                    <div className={styles.imagePreview}></div>
                    <div className={styles.formControl}>
                        <label htmlFor="foto">Fotografia:</label>
                        <input type="file" name="foto"></input>
                    </div>
                </div> : null}

                {active === 3 ? <div className={styles.step}>
                    <div className={styles.formControl}>
                        <label htmlFor="foto">Descrição:</label>
                        <textarea col="10" rows="10" placeholder="Descrição do negócio"></textarea>
                    </div>
                </div> : null}



                <div className={styles.flexWrapper}>
                    {active !== 1 ? <span onClick={() => dispatch({ type: 'back' })}><Button text="Retroceder" backgroundColor="none" textColor="var(--text-color)" borderColor="var(--text-color)" /></span> : null}
                    <span 
                    onClick={() => dispatch({ type: 'forward' })}
                    style={!formIsValid ? {pointerEvents:'none'} : ""}
                    ><Button text="Avançar" disabled={formIsValid} /></span>
                </div>

            </form>
        </div>

    )
}



export default RegisterForm